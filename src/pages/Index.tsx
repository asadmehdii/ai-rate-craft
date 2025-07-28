import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, Zap } from 'lucide-react';
import CustomResourceCalculator from '@/components/calculators/CustomResourceCalculator';
import SwatTeamCalculator from '@/components/calculators/SwatTeamCalculator';

const Index = () => {
  const [activeTab, setActiveTab] = useState('custom');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Rate Card Calculator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional resource rate calculation for custom development teams and SWAT engagements
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2 bg-card border border-border">
                <TabsTrigger 
                  value="custom" 
                  className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Calculator className="h-4 w-4" />
                  Custom Resource
                </TabsTrigger>
                <TabsTrigger 
                  value="swat" 
                  className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Zap className="h-4 w-4" />
                  SWAT Team
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Calculator Content */}
            <TabsContent value="custom" className="animate-fade-in">
              <div className="grid gap-8 lg:grid-cols-2 items-start">
                <div className="space-y-6">
                  <CustomResourceCalculator />
                </div>
                <div className="space-y-6">
                  <Card className="calculator-card">
                    <CardHeader>
                      <CardTitle className="text-xl">About Custom Resources</CardTitle>
                      <CardDescription>
                        Flexible resource allocation for your development needs
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm">How it works:</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Choose your required role and expertise level</li>
                          <li>• Select the operational region</li>
                          <li>• Get instant monthly rate calculations</li>
                          <li>• Transparent pricing with no hidden fees</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm">Regional Pricing:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Euro Asia: Base rate</li>
                          <li>• Middle East: +15% adjustment</li>
                          <li>• Europe: +30% adjustment</li>
                          <li>• North America: +40% adjustment</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="swat" className="animate-fade-in">
              <div className="grid gap-8 lg:grid-cols-2 items-start">
                <div className="space-y-6">
                  <SwatTeamCalculator />
                </div>
                <div className="space-y-6">
                  <Card className="calculator-card">
                    <CardHeader>
                      <CardTitle className="text-xl">About SWAT Teams</CardTitle>
                      <CardDescription>
                        Rapid deployment teams with pre-negotiated discounts
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm">Key Benefits:</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• 20% pre-negotiated discount included</li>
                          <li>• Flexible workload options (2-5 days/week)</li>
                          <li>• Additional duration-based discounts</li>
                          <li>• Rapid deployment and onboarding</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm">Duration Discounts:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• 1 month: No additional discount</li>
                          <li>• 2 months: Additional 5% off</li>
                          <li>• 3 months: Additional 10% off</li>
                          <li>• 4+ months: Additional 15% off</li>
                        </ul>
                      </div>
                      <div className="bg-calculator-success/10 rounded-lg p-3 border border-calculator-success/20">
                        <p className="text-sm text-calculator-success font-medium">
                          💡 Tip: SWAT teams are perfect for urgent projects requiring immediate deployment
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold">Ready to Get Started?</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Contact our team to discuss your project requirements and get a customized quote.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="calculator" size="lg">
                Request Quote
              </Button>
              <Button variant="professional" size="lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
