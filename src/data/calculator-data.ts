// Rate Card Calculator Data
// Based on the business logic provided

export interface Role {
  id: string;
  name: string;
  baseRate: number; // Base rate in AED per month
}

export interface Region {
  id: string;
  name: string;
  multiplier: number;
}

export interface SeniorityLevel {
  id: string;
  name: string;
  multiplier: number;
}

export interface WorkloadOption {
  id: string;
  name: string;
  percentage: number;
}

export interface DurationOption {
  id: string;
  name: string;
  months: number;
  discount: number; // Negative value for discount
}

// Base role rates (AED/month)
export const roles: Role[] = [
  { id: 'database-dev', name: 'Database Developer', baseRate: 8000 },
  { id: 'fullstack-dev', name: 'Full Stack Developer', baseRate: 10000 },
  { id: 'frontend-dev', name: 'Frontend Developer', baseRate: 9000 },
  { id: 'backend-dev', name: 'Backend Developer', baseRate: 9500 },
  { id: 'qa-engineer', name: 'Quality Assurance', baseRate: 7000 },
  { id: 'devops-engineer', name: 'DevOps Engineer', baseRate: 11000 },
  { id: 'ui-ux-designer', name: 'UI/UX Designer', baseRate: 8500 },
  { id: 'product-owner', name: 'Product Owner', baseRate: 12000 },
  { id: 'solution-architect', name: 'Solution Architect', baseRate: 15000 },
  { id: 'tech-lead', name: 'Technical Lead', baseRate: 13000 }
];

// Regional multipliers
export const regions: Region[] = [
  { id: 'euro-asia', name: 'Euro Asia', multiplier: 1.0 },
  { id: 'middle-east', name: 'Middle East', multiplier: 1.15 },
  { id: 'europe', name: 'Europe', multiplier: 1.3 },
  { id: 'north-america', name: 'North America', multiplier: 1.4 }
];

// Seniority multipliers
export const seniorityLevels: SeniorityLevel[] = [
  { id: 'intermediate', name: 'Intermediate', multiplier: 1.0 },
  { id: 'advanced', name: 'Advanced', multiplier: 1.25 },
  { id: 'expert', name: 'Expert', multiplier: 1.6 }
];

// SWAT Team specific seniority levels (different from custom resource)
export const swatSeniorityLevels: SeniorityLevel[] = [
  { id: 'middle', name: 'Middle', multiplier: 1.0 },
  { id: 'senior', name: 'Senior', multiplier: 1.1 },
  { id: 'expert', name: 'Expert', multiplier: 1.2 }
];

// Workload options for SWAT teams
export const workloadOptions: WorkloadOption[] = [
  { id: '2-days', name: '2 days/week', percentage: 0.4 },
  { id: '3-days', name: '3 days/week', percentage: 0.6 },
  { id: '4-days', name: '4 days/week', percentage: 0.8 },
  { id: 'full-time', name: 'Full-time', percentage: 1.0 }
];

// Duration options for SWAT teams with discounts
export const durationOptions: DurationOption[] = [
  { id: '1-month', name: '1 month', months: 1, discount: 0 },
  { id: '2-months', name: '2 months', months: 2, discount: -0.05 },
  { id: '3-months', name: '3 months', months: 3, discount: -0.10 },
  { id: '4-months', name: '4+ months', months: 4, discount: -0.15 }
];

// SWAT team pre-negotiated discount
export const SWAT_BASE_DISCOUNT = 0.20; // 20% base discount for SWAT teams

// Calculation helper functions
export const calculateCustomResourceRate = (
  roleRate: number,
  regionalMultiplier: number,
  seniorityMultiplier: number
): number => {
  return roleRate * regionalMultiplier * seniorityMultiplier;
};

export const calculateSwatTeamRate = (
  baseRate: number,
  regionalMultiplier: number,
  seniorityMultiplier: number,
  workloadPercentage: number,
  durationDiscount: number
): number => {
  const baseCalculation = baseRate * regionalMultiplier * seniorityMultiplier;
  const workloadAdjusted = baseCalculation * workloadPercentage;
  const durationAdjusted = workloadAdjusted * (1 + durationDiscount);
  const finalRate = durationAdjusted * (1 - SWAT_BASE_DISCOUNT);
  return finalRate;
};

// Currency formatting
export const formatCurrency = (amount: number, currency = 'AED'): string => {
  return new Intl.NumberFormat('en-AE', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};