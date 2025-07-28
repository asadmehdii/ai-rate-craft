import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { 
  roles, 
  regions, 
  seniorityLevels, 
  calculateCustomResourceRate, 
  formatCurrency,
  type Role,
  type Region,
  type SeniorityLevel 
} from '@/data/calculator-data';

const CustomResourceCalculator = () => {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [selectedSeniority, setSelectedSeniority] = useState<SeniorityLevel | null>(null);
  const [calculatedRate, setCalculatedRate] = useState<number>(0);

  // Calculate rate whenever selections change
  useEffect(() => {
    if (selectedRole && selectedRegion && selectedSeniority) {
      const rate = calculateCustomResourceRate(
        selectedRole.baseRate,
        selectedRegion.multiplier,
        selectedSeniority.multiplier
      );
      setCalculatedRate(rate);
    } else {
      setCalculatedRate(0);
    }
  }, [selectedRole, selectedRegion, selectedSeniority]);

  const handleRoleChange = (roleId: string) => {
    const role = roles.find(r => r.id === roleId);
    setSelectedRole(role || null);
  };

  const handleRegionChange = (regionId: string) => {
    const region = regions.find(r => r.id === regionId);
    setSelectedRegion(region || null);
  };

  const handleSeniorityChange = (seniorityId: string) => {
    const seniority = seniorityLevels.find(s => s.id === seniorityId);
    setSelectedSeniority(seniority || null);
  };

  return (
    <Card className="calculator-card animate-fade-in">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center bg-gradient-primary bg-clip-text text-transparent">
          Custom Resource Calculator
        </CardTitle>
        <CardDescription className="text-center text-muted-foreground">
          Calculate monthly rates for custom resource allocation
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Region Selection */}
        <div className="space-y-3">
          <Label className="text-sm font-semibold text-foreground">Region</Label>
          <Select onValueChange={handleRegionChange}>
            <SelectTrigger className="w-full h-12 text-base border-border bg-card hover:bg-accent transition-colors">
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              {regions.map((region) => (
                <SelectItem 
                  key={region.id} 
                  value={region.id}
                  className="hover:bg-accent hover:text-accent-foreground cursor-pointer"
                >
                  <div className="flex justify-between items-center w-full">
                    <span>{region.name}</span>
                    <span className="text-xs text-muted-foreground ml-2">
                      {region.multiplier === 1.0 ? 'Base' : `+${((region.multiplier - 1) * 100).toFixed(0)}%`}
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Role Selection */}
        <div className="space-y-3">
          <Label className="text-sm font-semibold text-foreground">Role</Label>
          <Select onValueChange={handleRoleChange}>
            <SelectTrigger className="w-full h-12 text-base border-border bg-card hover:bg-accent transition-colors">
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              {roles.map((role) => (
                <SelectItem 
                  key={role.id} 
                  value={role.id}
                  className="hover:bg-accent hover:text-accent-foreground cursor-pointer"
                >
                  <div className="flex justify-between items-center w-full">
                    <span>{role.name}</span>
                    <span className="text-xs text-muted-foreground ml-2">
                      {formatCurrency(role.baseRate)}
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Seniority Level Selection */}
        <div className="space-y-4">
          <Label className="text-sm font-semibold text-foreground">Seniority Level</Label>
          <RadioGroup 
            onValueChange={handleSeniorityChange}
            className="grid grid-cols-1 gap-3"
          >
            {seniorityLevels.map((seniority) => (
              <div key={seniority.id} className="flex items-center space-x-3 rounded-lg border border-border p-4 hover:bg-accent transition-colors">
                <RadioGroupItem value={seniority.id} id={seniority.id} />
                <Label 
                  htmlFor={seniority.id} 
                  className="flex-1 cursor-pointer font-medium"
                >
                  <div className="flex justify-between items-center">
                    <span>{seniority.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {seniority.multiplier === 1.0 ? 'Base' : `+${((seniority.multiplier - 1) * 100).toFixed(0)}%`}
                    </span>
                  </div>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Calculation Result */}
        <div className="bg-gradient-card rounded-lg p-6 border border-border">
          <div className="text-center space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Monthly Rate</p>
            <div className="text-4xl font-bold calculation-result animate-slide-up">
              {calculatedRate > 0 ? formatCurrency(calculatedRate) : '--'}
            </div>
            {calculatedRate > 0 && (
              <p className="text-xs text-muted-foreground mt-2">
                Base: {selectedRole ? formatCurrency(selectedRole.baseRate) : '--'} × 
                Region: {selectedRegion ? `${selectedRegion.multiplier}x` : '--'} × 
                Seniority: {selectedSeniority ? `${selectedSeniority.multiplier}x` : '--'}
              </p>
            )}
          </div>
        </div>

        {/* Validation Message */}
        {(!selectedRole || !selectedRegion || !selectedSeniority) && (
          <div className="text-center text-sm text-muted-foreground bg-muted/50 rounded-lg p-3">
            Please select all options to calculate the rate
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CustomResourceCalculator;