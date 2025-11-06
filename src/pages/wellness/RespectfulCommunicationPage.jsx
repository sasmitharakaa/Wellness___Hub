import WellnessTopicDetail from '../../components/wellness/WellnessTopicDetail';
import { getTopicBySlug } from '../../data/wellnessTopics';

const RespectfulCommunicationPage = () => {
    // Fetches the data object for the 'respectful-communication' topic
    const topicData = getTopicBySlug('respectful-communication');

    return (
        <WellnessTopicDetail topic={topicData} />
    );
};

export default RespectfulCommunicationPage;