import WellnessTopicDetail from '../../components/wellness/WellnessTopicDetail';
import { getTopicBySlug } from '../../data/wellnessTopics';

const SexualHealthIntroPage = () => {
    // Fetches the data object for the 'sexual-health-intro' topic
    const topicData = getTopicBySlug('sexual-health-intro');

    return (
        <WellnessTopicDetail topic={topicData} />
    );
};

export default SexualHealthIntroPage;