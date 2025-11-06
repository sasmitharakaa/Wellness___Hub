import WellnessTopicDetail from '../../components/wellness/WellnessTopicDetail';
import { getTopicBySlug } from '../../data/wellnessTopics';

const ConsentPage = () => {
    // Fetches the data object for the 'consent' topic
    const consentTopicData = getTopicBySlug('consent');

    return (
        <WellnessTopicDetail topic={consentTopicData} />
    );
};

export default ConsentPage;