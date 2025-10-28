import { useState, useMemo } from "react";
import { ChevronDown, ChevronRight, Search, User, Building2, Smartphone, DollarSign, Car, Briefcase, MoreHorizontal, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { apiCatalogData, CategoryData, APIItem } from "@/data/comprehensiveApiData";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAPI, setSelectedAPI] = useState<APIItem | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

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

              {/* Request Data Section */}
              <Card className="p-6 bg-gradient-to-br from-card to-muted border-border shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Request Data</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-background rounded-lg border border-primary/20 hover:border-primary/40 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      <span className="text-sm font-medium text-foreground">Aadhaar</span>
                    </div>
                    <p className="text-sm text-muted-foreground ml-8">• • • • • • • •</p>
                  </div>
                </div>
              </Card>

              {/* Response Data Section */}
              <Card className="p-6 bg-gradient-to-br from-card to-muted border-border shadow-md">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-secondary/10 rounded-lg">
                      <svg className="w-6 h-6 text-secondary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Response Data</h2>
                  </div>
                  <Button variant="outline" className="gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Show Data
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-background rounded-lg border border-primary/20 hover:border-primary/40 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      <span className="text-sm font-medium text-foreground">Aadhaar</span>
                    </div>
                    <p className="text-sm text-muted-foreground ml-8">• • • • • • • •</p>
                  </div>
                  
                  <div className="p-4 bg-background rounded-lg border border-primary/20 hover:border-primary/40 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-sm font-medium text-foreground">Pan</span>
                    </div>
                    <p className="text-sm text-muted-foreground ml-8">• • • • • • • •</p>
                  </div>
                </div>
              </Card>
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
