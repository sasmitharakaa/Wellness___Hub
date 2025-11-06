import WellnessTopicDetail from '../../components/wellness/WellnessTopicDetail';
import { getTopicBySlug } from '../../data/wellnessTopics';

const ConfidentialScreeningsPage = () => {
    // Fetches the data object for the 'confidential-screenings' topic
    const topicData = getTopicBySlug('confidential-screenings');

    return (
        <WellnessTopicDetail topic={topicData} />
    );
};

export default ConfidentialScreeningsPage;