import { useState, useMemo } from "react";
import { ChevronDown, ChevronRight, Search, User, Building2, Smartphone, DollarSign, Car, Briefcase, MoreHorizontal, ArrowLeft, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { apiCatalogData, CategoryData, APIItem } from "@/data/comprehensiveApiData";
import { cn } from "@/lib/utils";
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
  miscellaneous: MoreHorizontal,
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
    
    // Initialize form data with sample values
    if (api.requestSample) {
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

  const renderInputField = (key: string, value: any) => {
    const isTextarea = typeof value === 'string' && value.length > 50;
    const isNumber = typeof value === 'number' || key.toLowerCase().includes('it');
    
    return (
      <div key={key} className="space-y-2">
        <Label htmlFor={key} className="text-sm font-medium text-foreground capitalize">
          {key.replace(/_/g, ' ')}
        </Label>
        {isTextarea ? (
          <Textarea
            id={key}
            value={formData[key] || ''}
            onChange={(e) => handleInputChange(key, e.target.value)}
            className="min-h-[80px] bg-background border-input"
            placeholder={`Enter ${key.replace(/_/g, ' ')}`}
          />
        ) : (
          <Input
            id={key}
            type={isNumber ? 'number' : 'text'}
            value={formData[key] || ''}
            onChange={(e) => handleInputChange(key, isNumber ? Number(e.target.value) : e.target.value)}
            className="bg-background border-input"
            placeholder={`Enter ${key.replace(/_/g, ' ')}`}
          />
        )}
      </div>
    );
  };

  const renderResponseValue = (value: any): string => {
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    if (Array.isArray(value)) return value.join(', ');
    if (typeof value === 'object' && value !== null) {
      return JSON.stringify(value, null, 2);
    }
    return String(value);
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
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <h1 className="text-4xl font-bold text-primary">
                    {selectedAPI.name}
                  </h1>
                  <Badge className="bg-secondary/10 text-secondary-foreground border-secondary/20">
                    ✓ Billable
                  </Badge>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">🏷️</span>
                    <span>{apiCatalogData.find(cat => cat.id === selectedAPI.category)?.name || selectedAPI.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">📅</span>
                    <span>Last Updated: 2024-02-17</span>
                  </div>
                </div>
              </div>

              {/* Request Input Section */}
              {selectedAPI.requestSample ? (
                <Card className="border-border shadow-md">
                  <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Send className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">API Request</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      {Object.entries(selectedAPI.requestSample).map(([key, value]) => 
                        renderInputField(key, value)
                      )}
                    </div>
                    
                    <Button 
                      onClick={handleFetch} 
                      disabled={isFetching}
                      className="w-full mt-6 gap-2"
                      size="lg"
                    >
                      {isFetching ? (
                        <>
                          <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          Fetching...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Fetch Response
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="p-6 border-border shadow-md">
                  <div className="text-center text-muted-foreground py-8">
                    No input parameters available for this API
                  </div>
                </Card>
              )}

              {/* Response Data Section */}
              {responseData && (
                <Card className="border-border shadow-md">
                  <CardHeader className="bg-gradient-to-r from-secondary/5 to-primary/5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-secondary/10 rounded-lg">
                          <CheckCircle2 className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-2xl">API Response</CardTitle>
                      </div>
                      <Badge className="bg-success/10 text-success border-success/20">
                        Status: {responseData.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    {/* Response Metadata */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="p-3 rounded-lg bg-background border border-border">
                        <p className="text-xs text-muted-foreground mb-1">API Category</p>
                        <p className="text-sm font-semibold text-foreground">{responseData.api_category}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-background border border-border">
                        <p className="text-xs text-muted-foreground mb-1">API Name</p>
                        <p className="text-sm font-semibold text-foreground">{responseData.api_name}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-background border border-border">
                        <p className="text-xs text-muted-foreground mb-1">Transaction ID</p>
                        <p className="text-sm font-semibold text-foreground truncate">{responseData.txn_id}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-background border border-border">
                        <p className="text-xs text-muted-foreground mb-1">Message</p>
                        <p className="text-sm font-semibold text-foreground">{responseData.message}</p>
                      </div>
                    </div>

                    {/* Result Data */}
                    {responseData.result && (
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                          <div className="h-1 w-8 bg-gradient-primary rounded" />
                          Result Data
                        </h3>
                        <div className="grid gap-4 md:grid-cols-2">
                          {Object.entries(responseData.result).map(([key, value]) => {
                            // Handle nested objects
                            if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                              return (
                                <div key={key} className="col-span-full">
                                  <Card className="p-4 bg-background border-border">
                                    <h4 className="text-sm font-semibold text-foreground mb-3 capitalize">
                                      {key.replace(/_/g, ' ')}
                                    </h4>
                                    <div className="grid gap-2 md:grid-cols-2">
                                      {Object.entries(value as object).map(([nestedKey, nestedValue]) => (
                                        <div key={nestedKey} className="p-2 rounded bg-muted/50">
                                          <p className="text-xs text-muted-foreground mb-1 capitalize">
                                            {nestedKey.replace(/_/g, ' ')}
                                          </p>
                                          <p className="text-sm font-medium text-foreground">
                                            {renderResponseValue(nestedValue)}
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                  </Card>
                                </div>
                              );
                            }

                            // Handle arrays
                            if (Array.isArray(value)) {
                              return (
                                <div key={key} className="col-span-full">
                                  <Card className="p-4 bg-background border-border">
                                    <div className="flex items-center gap-2 mb-3">
                                      <h4 className="text-sm font-semibold text-foreground capitalize">
                                        {key.replace(/_/g, ' ')}
                                      </h4>
                                      <Badge variant="secondary">{value.length} items</Badge>
                                    </div>
                                    <div className="space-y-2">
                                      {value.map((item, idx) => (
                                        <div key={idx} className="p-3 rounded bg-muted/50">
                                          <pre className="text-xs text-foreground whitespace-pre-wrap">
                                            {typeof item === 'object' ? JSON.stringify(item, null, 2) : String(item)}
                                          </pre>
                                        </div>
                                      ))}
                                    </div>
                                  </Card>
                                </div>
                              );
                            }

                            // Handle simple values
                            return (
                              <div key={key} className="p-3 rounded-lg bg-background border border-border">
                                <p className="text-xs text-muted-foreground mb-1 capitalize">
                                  {key.replace(/_/g, ' ')}
                                </p>
                                <p className="text-sm font-semibold text-foreground break-words">
                                  {renderResponseValue(value)}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Footer with timestamp */}
                    <div className="mt-6 pt-4 border-t border-border">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>Response Time: <span className="font-semibold text-foreground">145ms</span></span>
                        <span>Timestamp: <span className="font-semibold text-foreground">{responseData.datetime}</span></span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Select an API
                  </h2>
                  <p className="text-muted-foreground">
                    Choose an API from the sidebar to view its documentation and details
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default APICatalog;
