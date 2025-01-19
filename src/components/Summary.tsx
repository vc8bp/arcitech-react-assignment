import React from 'react';
import { Brain, CheckCircle, XCircle, Clock } from 'lucide-react';
import type { InsightSummary as InsightSummaryType } from '../types/data';

interface Props {
  data: InsightSummaryType;
}

export const InsightSummary: React.FC<Props> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex items-center space-x-3">
          <Brain className="w-8 h-8 text-blue-500" />
          <div>
            <p className="text-gray-500 text-sm">Total Queries</p>
            <p className="text-2xl font-bold">{data.total_queries}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex items-center space-x-3">
          <CheckCircle className="w-8 h-8 text-green-500" />
          <div>
            <p className="text-gray-500 text-sm">Successful Queries</p>
            <p className="text-2xl font-bold">{data.successful_queries}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex items-center space-x-3">
          <XCircle className="w-8 h-8 text-red-500" />
          <div>
            <p className="text-gray-500 text-sm">Failed Queries</p>
            <p className="text-2xl font-bold">{data.failed_queries}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex items-center space-x-3">
          <Clock className="w-8 h-8 text-purple-500" />
          <div>
            <p className="text-gray-500 text-sm">Avg Response Time</p>
            <p className="text-2xl font-bold">{data.average_response_time}s</p>
          </div>
        </div>
      </div>
    </div>
  );
};