import WellnessTopicDetail from '../../components/wellness/WellnessTopicDetail';
import { getTopicBySlug } from '../../data/wellnessTopics';

const SafePracticesPage = () => {
    // Fetches the data object for the 'safe-practices' topic
    const topicData = getTopicBySlug('safe-practices');

    return (
        <WellnessTopicDetail topic={topicData} />
    );
};

export default SafePracticesPage;