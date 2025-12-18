import { useState, useMemo } from "react";
import { ChevronDown, ChevronRight, Search, User, Building2, Smartphone, DollarSign, Car, Briefcase, MoreHorizontal, ArrowLeft, Eye, EyeOff, CheckCircle2, Circle, FileText, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { apiCatalogData, CategoryData, APIItem, APIStep } from "@/data/comprehensiveApiData";
import { cn, maskData } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
// Category icon mapping
const categoryIcons: Record<string, any> = {
  kyc: User,
  kyb: Building2,
  "mobile-360": Smartphone,
  utility: MoreHorizontal,
  "financial-check": DollarSign,
  "vehicle-verification": Car,
  "profession-check": Briefcase,
  "fraud-check": MoreHorizontal,
};

const APICatalog = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAPI, setSelectedAPI] = useState<APIItem | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [responseData, setResponseData] = useState<any>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [showData, setShowData] = useState(false);
  const [consent, setConsent] = useState(true);
  
  // Multi-step API states
  const [currentStep, setCurrentStep] = useState(1);
  const [stepResponses, setStepResponses] = useState<Record<number, any>>({});
  const [stepFormData, setStepFormData] = useState<Record<number, Record<string, any>>>({});

  // Filter APIs based on search query
  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return apiCatalogData;

    const query = searchQuery.toLowerCase();
    return apiCatalogData
      .map((category) => ({
        ...category,
        apis: category.apis.filter(
          (api) =>
            api.name.toLowerCase().includes(query) ||
            category.name.toLowerCase().includes(query)
        ),
      }))
      .filter((category) => category.apis.length > 0);
  }, [searchQuery]);

  // Auto-expand categories when search results are shown
  useMemo(() => {
    if (searchQuery.trim()) {
      const categoriesToExpand = new Set(
        filteredData.map((category) => category.id)
      );
      setExpandedCategories(categoriesToExpand);
    }
  }, [filteredData, searchQuery]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const handleAPIClick = (api: APIItem) => {
    setSelectedAPI(api);
    setFormData({});
    setResponseData(null);
    setShowData(false);
    setCurrentStep(1);
    setStepResponses({});
    setStepFormData({});
    
    // Initialize form data with sample values
    if (api.isMultiStep && api.steps) {
      // Initialize form data for all steps
      const initialStepData: Record<number, Record<string, any>> = {};
      api.steps.forEach(step => {
        initialStepData[step.stepNumber] = { ...step.requestSample };
      });
      setStepFormData(initialStepData);
    } else if (api.requestSample) {
      const initialData: Record<string, any> = {};
      Object.keys(api.requestSample).forEach(key => {
        initialData[key] = api.requestSample[key];
      });
      setFormData(initialData);
    }
  };

  const handleInputChange = (key: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleFetch = () => {
    if (!selectedAPI) return;
    
    if (!consent) {
      toast({
        title: "Consent Required",
        description: "Please provide consent to proceed",
        variant: "destructive",
      });
      return;
    }
    
    setIsFetching(true);
    
    // Simulate API call
    setTimeout(() => {
      setResponseData(selectedAPI.responseSample);
      setIsFetching(false);
      
      toast({
        title: "Success",
        description: "API response received successfully",
      });
    }, 800);
  };

  const handleStepFetch = (stepNumber: number) => {
    if (!selectedAPI || !selectedAPI.steps) return;
    
    const step = selectedAPI.steps.find(s => s.stepNumber === stepNumber);
    if (!step) return;
    
    setIsFetching(true);
    
    // Simulate API call for the step
    setTimeout(() => {
      setStepResponses(prev => ({
        ...prev,
        [stepNumber]: step.responseSample
      }));
      setIsFetching(false);
      
      toast({
        title: "Success",
        description: `Step ${stepNumber}: ${step.stepName} completed successfully`,
      });
      
      // Auto advance to next step if available
      if (selectedAPI.steps && stepNumber < selectedAPI.steps.length) {
        setCurrentStep(stepNumber + 1);
      }
    }, 800);
  };

  const handleStepInputChange = (stepNumber: number, key: string, value: any) => {
    setStepFormData(prev => ({
      ...prev,
      [stepNumber]: {
        ...prev[stepNumber],
        [key]: value
      }
    }));
  };

  const renderStepInputField = (stepNumber: number, key: string, value: any) => {
    if (key === 'consent' || key === 'consent_text') return null;

    const label = key.replace(/_/g, ' ').split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    return (
      <div key={key} className="space-y-2">
        <Label htmlFor={`${stepNumber}-${key}`}>{label}</Label>
        <Input
          id={`${stepNumber}-${key}`}
          value={stepFormData[stepNumber]?.[key] || ''}
          onChange={(e) => handleStepInputChange(stepNumber, key, e.target.value)}
          placeholder={`Enter ${label}`}
          className="bg-background"
        />
      </div>
    );
  };

  const shouldMaskField = (fieldName: string): boolean => {
    const sensitiveFields = [
      'name', 'pan', 'aadhaar', 'mobile', 'phone', 'email', 'dl', 
      'voter', 'passport', 'epic', 'father', 'address', 'din', 'card_number'
    ];
    return sensitiveFields.some(field => fieldName.toLowerCase().includes(field));
  };

  const renderInputField = (key: string, value: any) => {
    // Skip consent fields as they're handled separately
    if (key === 'consent' || key === 'consent_text') return null;

    const label = key.replace(/_/g, ' ').split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    return (
      <div key={key} className="space-y-2">
        <Label htmlFor={key}>{label}</Label>
        <Input
          id={key}
          value={formData[key] || ''}
          onChange={(e) => handleInputChange(key, e.target.value)}
          placeholder={`Enter ${label}`}
          className="bg-background"
        />
      </div>
    );
  };

  const renderResponseSection = (title: string, data: any) => {
    if (!data || (typeof data === 'object' && Object.keys(data).length === 0)) return null;

    // Handle simple values
    if (typeof data !== 'object' || data === null) {
      return (
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="font-semibold text-foreground break-words">
            {shouldMaskField(title) ? maskData(String(data), showData) : String(data)}
          </p>
        </div>
      );
    }

    // Handle arrays
    if (Array.isArray(data)) {
      return (
        <div className="space-y-2">
          <p className="text-sm font-semibold text-foreground">{title}</p>
          {data.map((item, idx) => (
            <div key={idx} className="p-3 bg-muted rounded-lg">
              {typeof item === 'object' ? (
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(item).map(([itemKey, itemValue]) => (
                    <div key={itemKey}>
                      <p className="text-xs text-muted-foreground">
                        {itemKey.replace(/_/g, ' ').toUpperCase()}
                      </p>
                      <p className="font-medium text-sm">{String(itemValue)}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="font-medium">{String(item)}</p>
              )}
            </div>
          ))}
        </div>
      );
    }

    // Handle nested objects
    return (
      <div className="grid md:grid-cols-2 gap-4">
        {Object.entries(data).map(([key, value]) => {
          const label = key.replace(/_/g, ' ').split(' ').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ');

          // Nested object
          if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            return (
              <div key={key} className="col-span-full border-t pt-4 first:border-t-0 first:pt-0">
                <p className="text-sm font-semibold text-foreground mb-3">{label}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(value as Record<string, any>).map(([subKey, subValue]) => (
                    <div key={subKey}>
                      <p className="text-sm text-muted-foreground">
                        {subKey.replace(/_/g, ' ').split(' ').map(word => 
                          word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(' ')}
                      </p>
                      <p className="font-semibold text-foreground break-words">
                        {shouldMaskField(subKey) ? maskData(String(subValue), showData) : String(subValue)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          // Array
          if (Array.isArray(value)) {
            return renderResponseSection(label, value);
          }

          // Simple value
          return (
            <div key={key}>
              <p className="text-sm text-muted-foreground">{label}</p>
              <p className="font-semibold text-foreground break-words">
                {shouldMaskField(key) ? maskData(String(value), showData) : String(value)}
              </p>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="flex h-screen w-full bg-background">
      {/* Sidebar */}
      <aside className="w-80 border-r border-border bg-card flex flex-col shadow-lg">
        {/* Header */}
        <div className="p-6 border-b border-border bg-gradient-to-r from-primary/5 to-secondary/5">
          <h1 className="text-2xl font-bold text-primary">Explore APIs</h1>
        </div>
        
        {/* Search Box */}
        <div className="p-4 border-b border-border">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search API..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 bg-background border-input"
            />
          </div>
        </div>

        {/* API Categories List */}
        <ScrollArea className="flex-1">
          <div className="p-3">
            {filteredData.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground text-sm">
                No APIs found matching "{searchQuery}"
              </div>
            ) : (
              filteredData.map((category) => {
                const IconComponent = categoryIcons[category.id] || MoreHorizontal;
                return (
                  <div key={category.id} className="mb-2">
                    {/* Category Header */}
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="w-full flex items-center gap-3 p-2.5 rounded-md hover:bg-muted transition-colors group text-left"
                    >
                      <IconComponent className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="font-medium text-sm text-foreground flex-1">
                        {category.name}
                      </span>
                      {expandedCategories.has(category.id) ? (
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      )}
                    </button>

                    {/* API List */}
                    {expandedCategories.has(category.id) && (
                      <div className="ml-7 mt-1 space-y-0.5">
                        {category.apis.map((api) => (
                          <button
                            key={api.id}
                            onClick={() => handleAPIClick(api)}
                            className={cn(
                              "w-full text-left px-3 py-2 rounded-md text-sm transition-colors",
                              selectedAPI?.id === api.id
                                ? "bg-primary text-primary-foreground font-medium"
                                : "text-foreground hover:bg-muted"
                            )}
                          >
                            {api.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </ScrollArea>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto bg-background">
        <div className="max-w-6xl mx-auto p-8">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate("/product/id-proof")}
            className="mb-6 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          
          {selectedAPI ? (
            <div className="space-y-6">
              {/* Header */}
              <div className="text-center">
                <h1 className="text-4xl font-bold text-foreground mb-3">
                  {selectedAPI.name}
                </h1>
                <p className="text-muted-foreground">
                  {apiCatalogData.find(cat => cat.apis.some(api => api.id === selectedAPI.id))?.name || 'API Verification'}
                </p>
                {selectedAPI.isMultiStep && (
                  <Badge className="mt-2 bg-secondary text-secondary-foreground">
                    Multi-Step API Journey
                  </Badge>
                )}
              </div>

              {/* Multi-Step API Journey */}
              {selectedAPI.isMultiStep && selectedAPI.steps ? (
                <div className="space-y-6">
                  {/* Step Progress Indicator */}
                  <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-center gap-4">
                        {selectedAPI.steps.map((step, index) => (
                          <div key={step.stepNumber} className="flex items-center">
                            <div className="flex flex-col items-center">
                              <div className={cn(
                                "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all",
                                stepResponses[step.stepNumber] 
                                  ? "bg-green-500 border-green-500 text-white"
                                  : currentStep === step.stepNumber 
                                    ? "bg-primary border-primary text-primary-foreground"
                                    : "bg-muted border-border text-muted-foreground"
                              )}>
                                {stepResponses[step.stepNumber] ? (
                                  <CheckCircle2 className="h-5 w-5" />
                                ) : (
                                  <span className="font-bold">{step.stepNumber}</span>
                                )}
                              </div>
                              <span className={cn(
                                "text-xs mt-2 font-medium max-w-[100px] text-center",
                                stepResponses[step.stepNumber] || currentStep === step.stepNumber 
                                  ? "text-foreground" 
                                  : "text-muted-foreground"
                              )}>
                                {step.stepName}
                              </span>
                            </div>
                            {index < selectedAPI.steps!.length - 1 && (
                              <div className={cn(
                                "w-16 h-0.5 mx-2 transition-all",
                                stepResponses[step.stepNumber] ? "bg-green-500" : "bg-border"
                              )} />
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Steps Cards */}
                  {selectedAPI.steps.map((step) => (
                    <div key={step.stepNumber} className="space-y-4">
                      {/* Step Input Card */}
                      <Card className={cn(
                        "transition-all",
                        stepResponses[step.stepNumber] 
                          ? "border-green-500/50 bg-green-500/5" 
                          : currentStep === step.stepNumber 
                            ? "border-primary shadow-lg" 
                            : "opacity-60"
                      )}>
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <CardTitle className="flex items-center gap-2">
                              <span className={cn(
                                "w-7 h-7 rounded-full flex items-center justify-center text-sm",
                                stepResponses[step.stepNumber] 
                                  ? "bg-green-500 text-white"
                                  : currentStep === step.stepNumber 
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted text-muted-foreground"
                              )}>
                                {stepResponses[step.stepNumber] ? <CheckCircle2 className="h-4 w-4" /> : step.stepNumber}
                              </span>
                              Step {step.stepNumber}: {step.stepName}
                            </CardTitle>
                            {stepResponses[step.stepNumber] && (
                              <Badge className="bg-green-500 text-white">Completed</Badge>
                            )}
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {/* Input Fields */}
                          <div className="space-y-4">
                            {Object.entries(step.requestSample).map(([key, value]) => 
                              renderStepInputField(step.stepNumber, key, value)
                            )}
                          </div>
                          
                          {/* Fetch Button */}
                          {!stepResponses[step.stepNumber] && currentStep === step.stepNumber && (
                            <div className="pt-4">
                              <Button 
                                onClick={() => handleStepFetch(step.stepNumber)} 
                                disabled={isFetching || !consent || (step.stepNumber > 1 && !stepResponses[step.stepNumber - 1])}
                                className="w-full"
                              >
                                {isFetching ? 'Processing...' : `Execute Step ${step.stepNumber}`}
                              </Button>
                            </div>
                          )}
                        </CardContent>
                      </Card>

                      {/* Step Response Card */}
                      {stepResponses[step.stepNumber] && (
                        <Card className="border-green-500/30 animate-fade-in">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-sm flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                              Step {step.stepNumber} Response
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                              <div>
                                <p className="text-xs text-muted-foreground">Status</p>
                                <Badge className={stepResponses[step.stepNumber].status === 1 ? "bg-green-500 text-white" : "bg-destructive text-white"}>
                                  {stepResponses[step.stepNumber].message}
                                </Badge>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground">Transaction ID</p>
                                <p className="font-mono text-xs break-all">{stepResponses[step.stepNumber].txn_id}</p>
                              </div>
                            </div>
                            
                            {/* Result Data */}
                            {stepResponses[step.stepNumber].result && (
                              <div className="bg-muted rounded-lg p-4">
                                {Object.entries(stepResponses[step.stepNumber].result).map(([key, value]) => {
                                  const label = key.replace(/_/g, ' ').split(' ').map(word => 
                                    word.charAt(0).toUpperCase() + word.slice(1)
                                  ).join(' ');
                                  
                                  // Special handling for PDF URL
                                  if (key.toLowerCase().includes('pdf') || key.toLowerCase().includes('url')) {
                                    return (
                                      <div key={key} className="space-y-2">
                                        <p className="text-sm text-muted-foreground">{label}</p>
                                        <div className="flex items-center gap-2">
                                          <FileText className="h-5 w-5 text-primary" />
                                          <a 
                                            href={String(value)} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-primary hover:underline flex items-center gap-1 text-sm"
                                          >
                                            View Certificate PDF
                                            <ExternalLink className="h-4 w-4" />
                                          </a>
                                        </div>
                                      </div>
                                    );
                                  }
                                  
                                  return (
                                    <div key={key} className="mb-2">
                                      <p className="text-xs text-muted-foreground">{label}</p>
                                      <p className="font-semibold text-sm break-all">{String(value)}</p>
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  ))}

                  {/* Consent */}
                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="consent-multi" 
                      checked={consent} 
                      onCheckedChange={(checked) => setConsent(checked === true)} 
                    />
                    <label htmlFor="consent-multi" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      I authorize BeFiSc to verify and fetch details linked to the information I've provided from authorized data sources for compliance and risk checks, in line with the DPDP Act, 2023.
                    </label>
                  </div>
                </div>
              ) : (
                <>
                  {/* Standard Single-Step API */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Enter {selectedAPI.name} Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {selectedAPI.requestSample && Object.keys(selectedAPI.requestSample).length > 0 ? (
                        <>
                          <div className="space-y-4">
                            {Object.entries(selectedAPI.requestSample).map(([key, value]) => 
                              renderInputField(key, value)
                            )}
                          </div>
                          
                          <div className="flex gap-4 items-center pt-4">
                            <Button 
                              onClick={handleFetch} 
                              disabled={isFetching || !consent}
                              className="flex-shrink-0"
                            >
                              {isFetching ? 'Fetching...' : 'Fetch'}
                            </Button>
                          </div>

                          <div className="flex items-start space-x-2 pt-2">
                            <Checkbox 
                              id="consent" 
                              checked={consent} 
                              onCheckedChange={(checked) => setConsent(checked === true)} 
                            />
                            <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                              I authorize BeFiSc to verify and fetch details linked to the information I've provided from authorized data sources for compliance and risk checks, in line with the DPDP Act, 2023.
                            </label>
                          </div>
                        </>
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-lg text-muted-foreground">Sample data updating soon...</p>
                          <p className="text-sm text-muted-foreground mt-2">This API documentation is currently being prepared.</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Response Section */}
                  {responseData && (
                    <div className="space-y-6 animate-fade-in">
                      <div className="flex justify-end">
                        <Button variant="outline" size="sm" onClick={() => setShowData(!showData)}>
                          {showData ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
                          {showData ? 'Hide' : 'Show'} Data
                        </Button>
                      </div>

                      {/* Status Card */}
                      <Card className="border-2 border-primary">
                        <CardContent className="pt-6">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-muted-foreground">Status</p>
                              <Badge className={responseData.status === 1 ? "bg-gradient-primary text-white text-base" : "bg-destructive text-white text-base"}>
                                {responseData.message}
                              </Badge>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Transaction ID</p>
                              <p className="font-mono text-sm font-semibold break-all">{responseData.txn_id}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">API Name</p>
                              <p className="font-semibold text-sm">{responseData.api_name}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Billable</p>
                              <Badge variant="outline">
                                {responseData.billable ? 'Yes' : 'No'}
                              </Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Result Data */}
                      {responseData.result && (
                        <Card>
                          <CardHeader>
                            <CardTitle>Result Details</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            {renderResponseSection('', responseData.result)}
                          </CardContent>
                        </Card>
                      )}

                      {/* Timestamp */}
                      <div className="text-xs text-muted-foreground text-right">
                        Response Time: {responseData.datetime}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Select an API from the sidebar to get started
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default APICatalog;
