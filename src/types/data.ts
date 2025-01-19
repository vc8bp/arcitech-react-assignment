export interface InsightSummary {
    total_queries: number;
    successful_queries: number;
    failed_queries: number;
    average_response_time: number;
  }
  
  export interface CategoryDistribution {
    small_talk: number;
    technical_support: number;
    sales_inquiries: number;
    customer_service: number;
  }
  
  export interface ResponseTime {
    date?: string;
    week?: string;
    average_time: number;
  }
  
  export interface Rating {
    rating: number;
    count: number;
  }
  
  export interface UsageStatistics {
    by_platform: {
      iOS: number;
      Android: number;
      Web: number;
    };
    by_country: {
      [key: string]: number;
    };
  }

  export interface UserSatisfaction {
    ratings: Rating[];
  }
  
  export interface AIData {
    insight_summary: InsightSummary;
    category_distribution: CategoryDistribution;
    response_times: {
      day_wise: ResponseTime[];
      week_wise: ResponseTime[];
    };
    user_satisfaction: UserSatisfaction
    usage_statistics: UsageStatistics;
  }