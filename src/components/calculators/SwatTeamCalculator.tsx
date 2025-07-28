import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  roles, 
  regions, 
  swatSeniorityLevels, 
  workloadOptions,
  durationOptions,
  calculateSwatTeamRate, 
  formatCurrency,
  SWAT_BASE_DISCOUNT,
  type Role,
  type Region,
  type SeniorityLevel,
  type WorkloadOption,
  type DurationOption 
} from '@/data/calculator-data';

const SwatTeamCalculator = () => {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [selectedSeniority, setSelectedSeniority] = useState<SeniorityLevel | null>(null);
  const [selectedWorkload, setSelectedWorkload] = useState<WorkloadOption | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<DurationOption | null>(null);
  const [calculatedRate, setCalculatedRate] = useState<number>(0);
  const [baseCalculation, setBaseCalculation] = useState<number>(0);

  // Calculate rate whenever selections change
  useEffect(() => {
    if (selectedRole && selectedRegion && selectedSeniority && selectedWorkload && selectedDuration) {
      const baseRate = selectedRole.baseRate * selectedRegion.multiplier * selectedSeniority.multiplier;
      setBaseCalculation(baseRate);
      
      const finalRate = calculateSwatTeamRate(
        selectedRole.baseRate,
        selectedRegion.multiplier,
        selectedSeniority.multiplier,
        selectedWorkload.percentage,
        selectedDuration.discount
      );
      setCalculatedRate(finalRate);
    } else {
      setCalculatedRate(0);
      setBaseCalculation(0);
    }
  }, [selectedRole, selectedRegion, selectedSeniority, selectedWorkload, selectedDuration]);

  const handleRoleChange = (roleId: string) => {
    const role = roles.find(r => r.id === roleId);
    setSelectedRole(role || null);
  };

  const handleRegionChange = (regionId: string) => {
    const region = regions.find(r => r.id === regionId);
    setSelectedRegion(region || null);
  };

  const handleSeniorityChange = (seniorityId: string) => {
    const seniority = swatSeniorityLevels.find(s => s.id === seniorityId);
    setSelectedSeniority(seniority || null);
  };

  const handleWorkloadChange = (workloadId: string) => {
    const workload = workloadOptions.find(w => w.id === workloadId);
    setSelectedWorkload(workload || null);
  };

  const handleDurationChange = (durationId: string) => {
    const duration = durationOptions.find(d => d.id === durationId);
    setSelectedDuration(duration || null);
  };

  return (
    <Card className="calculator-card animate-fade-in">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center bg-gradient-primary bg-clip-text text-transparent">
          SWAT Team Calculator
        </CardTitle>
        <CardDescription className="text-center text-muted-foreground">
          Calculate discounted rates for SWAT team engagements
        </CardDescription>
        <div className="flex justify-center mt-2">
          <Badge variant="secondary" className="bg-calculator-success/20 text-calculator-success border-calculator-success/30">
            {(SWAT_BASE_DISCOUNT * 100).toFixed(0)}% Pre-negotiated Discount
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Role Selection */}
        <div className="space-y-3">
          <Label className="text-sm font-semibold text-foreground">SWAT Role</Label>
          <Select onValueChange={handleRoleChange}>
            <SelectTrigger className="w-full h-12 text-base border-border bg-card hover:bg-accent transition-colors">
              <SelectValue placeholder="Select SWAT role" />
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

        {/* Seniority Level Selection */}
        <div className="space-y-4">
          <Label className="text-sm font-semibold text-foreground">Seniority Level</Label>
          <RadioGroup 
            onValueChange={handleSeniorityChange}
            className="grid grid-cols-1 gap-3"
          >
            {swatSeniorityLevels.map((seniority) => (
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

        {/* Workload Selection */}
        <div className="space-y-4">
          <Label className="text-sm font-semibold text-foreground">Workload</Label>
          <RadioGroup 
            onValueChange={handleWorkloadChange}
            className="grid grid-cols-1 gap-3"
          >
            {workloadOptions.map((workload) => (
              <div key={workload.id} className="flex items-center space-x-3 rounded-lg border border-border p-4 hover:bg-accent transition-colors">
                <RadioGroupItem value={workload.id} id={workload.id} />
                <Label 
                  htmlFor={workload.id} 
                  className="flex-1 cursor-pointer font-medium"
                >
                  <div className="flex justify-between items-center">
                    <span>{workload.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {(workload.percentage * 100).toFixed(0)}%
                    </span>
                  </div>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Duration Selection */}
        <div className="space-y-4">
          <Label className="text-sm font-semibold text-foreground">Duration</Label>
          <RadioGroup 
            onValueChange={handleDurationChange}
            className="grid grid-cols-1 gap-3"
          >
            {durationOptions.map((duration) => (
              <div key={duration.id} className="flex items-center space-x-3 rounded-lg border border-border p-4 hover:bg-accent transition-colors">
                <RadioGroupItem value={duration.id} id={duration.id} />
                <Label 
                  htmlFor={duration.id} 
                  className="flex-1 cursor-pointer font-medium"
                >
                  <div className="flex justify-between items-center">
                    <span>{duration.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {duration.discount === 0 ? 'No discount' : `${(duration.discount * 100).toFixed(0)}% off`}
                    </span>
                  </div>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Calculation Breakdown */}
        {calculatedRate > 0 && (
          <div className="bg-gradient-card rounded-lg p-4 border border-border space-y-3">
            <h4 className="font-semibold text-sm text-foreground">Calculation Breakdown</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Base Rate (with adjustments):</span>
                <span>{formatCurrency(baseCalculation)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Workload Adjustment:</span>
                <span>{selectedWorkload ? `${(selectedWorkload.percentage * 100).toFixed(0)}%` : '--'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Duration Discount:</span>
                <span>{selectedDuration && selectedDuration.discount !== 0 ? `${(selectedDuration.discount * 100).toFixed(0)}%` : 'None'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">SWAT Discount:</span>
                <span className="text-calculator-success">-{(SWAT_BASE_DISCOUNT * 100).toFixed(0)}%</span>
              </div>
            </div>
          </div>
        )}

        {/* Final Result */}
        <div className="bg-gradient-card rounded-lg p-6 border border-border">
          <div className="text-center space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Final Monthly Rate</p>
            <div className="text-4xl font-bold calculation-result animate-slide-up">
              {calculatedRate > 0 ? formatCurrency(calculatedRate) : '--'}
            </div>
            {calculatedRate > 0 && baseCalculation > 0 && (
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">
                  Total Savings: {formatCurrency(baseCalculation - calculatedRate)}
                </p>
                <p className="text-xs text-calculator-success">
                  {(((baseCalculation - calculatedRate) / baseCalculation) * 100).toFixed(1)}% off standard rate
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Validation Message */}
        {(!selectedRole || !selectedRegion || !selectedSeniority || !selectedWorkload || !selectedDuration) && (
          <div className="text-center text-sm text-muted-foreground bg-muted/50 rounded-lg p-3">
            Please select all options to calculate the SWAT team rate
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SwatTeamCalculator;