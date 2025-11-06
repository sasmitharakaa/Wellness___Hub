import WellnessTopicDetail from '../../components/wellness/WellnessTopicDetail';
import { getTopicBySlug } from '../../data/wellnessTopics';

const OpenDiscussionsPage = () => {
    // Fetches the data object for the 'open-discussions' topic
    const topicData = getTopicBySlug('open-discussions');

    return (
        <WellnessTopicDetail topic={topicData} />
    );
};

export default OpenDiscussionsPage;