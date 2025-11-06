import WellnessTopicDetail from '../../components/wellness/WellnessTopicDetail';
import { getTopicBySlug } from '../../data/wellnessTopics';

const MenstrualHealthPage = () => {
    // Fetches the data object for the 'menstrual-health' topic
    const topicData = getTopicBySlug('menstrual-health');

    return (
        <WellnessTopicDetail topic={topicData} />
    );
};

export default MenstrualHealthPage;