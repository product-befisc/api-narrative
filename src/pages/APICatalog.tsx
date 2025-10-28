import { useState, useMemo } from "react";
import { ChevronDown, ChevronRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { apiCatalogData, CategoryData, APIItem } from "@/data/comprehensiveApiData";
import { cn } from "@/lib/utils";

const APICatalog = () => {
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
      <aside className="w-80 border-r border-border bg-card flex flex-col">
        {/* Search Box */}
        <div className="p-4 border-b border-border">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search APIs or categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 bg-background"
            />
          </div>
        </div>

        {/* API Categories List */}
        <ScrollArea className="flex-1">
          <div className="p-2">
            {filteredData.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground text-sm">
                No APIs found matching "{searchQuery}"
              </div>
            ) : (
              filteredData.map((category) => (
                <div key={category.id} className="mb-1">
                  {/* Category Header */}
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full flex items-center justify-between p-3 rounded-md hover:bg-accent transition-colors group"
                  >
                    <div className="flex items-center gap-2">
                      {expandedCategories.has(category.id) ? (
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span className="font-semibold text-sm text-foreground">
                        {category.name}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                      {category.apis.length}
                    </span>
                  </button>

                  {/* API List */}
                  {expandedCategories.has(category.id) && (
                    <div className="ml-6 mt-1 space-y-0.5">
                      {category.apis.map((api) => (
                        <button
                          key={api.id}
                          onClick={() => handleAPIClick(api)}
                          className={cn(
                            "w-full text-left p-2 rounded-md text-sm transition-colors",
                            selectedAPI?.id === api.id
                              ? "bg-primary text-primary-foreground font-medium"
                              : "text-foreground hover:bg-accent"
                          )}
                        >
                          {api.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </ScrollArea>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {selectedAPI ? (
            <Card className="p-8">
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">
                    {selectedAPI.name}
                  </h1>
                  <p className="text-muted-foreground">
                    Category: {apiCatalogData.find(cat => cat.id === selectedAPI.category)?.name || selectedAPI.category}
                  </p>
                </div>

                <div className="border-t border-border pt-6">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    API Documentation
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Detailed documentation for <strong>{selectedAPI.name}</strong> will be displayed here.
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-sm">
                        This API allows you to perform various operations related to {selectedAPI.name.toLowerCase()}.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium text-foreground">Features:</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Real-time data verification</li>
                        <li>Comprehensive response format</li>
                        <li>High accuracy and reliability</li>
                        <li>Fast processing time</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ) : (
            <div className="flex items-center justify-center h-full">
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
