import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './redux/store';
import { fetchAIData } from './redux/aiDataSlice';
import { InsightSummary } from './components/Summary';
import { CategoryDistributionChart } from './components/Catagory';
import { ResponseTimeChart } from './components/TimeChart';
import { UsageStatistics } from './components/UsageStats';
import { Loader2 } from 'lucide-react';
import UserSatisfactionChart from './components/UserSatisfaction';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootState) => state.aiData);

  useEffect(() => {
    dispatch(fetchAIData());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-red-500">Error loading data: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">AI Insights Dashboard</h1>
        
        <InsightSummary data={data.insight_summary} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ResponseTimeChart dayWiseData={data.response_times.day_wise} weekWiseData={data.response_times.week_wise}  />
          <CategoryDistributionChart data={data.category_distribution} />
        </div>
        
        <UsageStatistics data={data.usage_statistics} />
        <UserSatisfactionChart data={data.user_satisfaction} />
      </div>
    </div>
  );
}

export default App;