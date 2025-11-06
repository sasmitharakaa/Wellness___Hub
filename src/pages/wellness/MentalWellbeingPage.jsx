import WellnessTopicDetail from '../../components/wellness/WellnessTopicDetail';
import { getTopicBySlug } from '../../data/wellnessTopics';

const MentalWellbeingPage = () => {
    // Fetches the data object for the 'mental-well-being' topic
    const topicData = getTopicBySlug('mental-well-being');

    return (
        <WellnessTopicDetail topic={topicData} />
    );
};

export default MentalWellbeingPage;