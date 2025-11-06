import WellnessTopicDetail from '../../components/wellness/WellnessTopicDetail';
import { getTopicBySlug } from '../../data/wellnessTopics';

const ReproductiveRightsPage = () => {
    // Fetches the data object for the 'reproductive-rights' topic
    const topicData = getTopicBySlug('reproductive-rights');

    return (
        <WellnessTopicDetail topic={topicData} />
    );
};

export default ReproductiveRightsPage;