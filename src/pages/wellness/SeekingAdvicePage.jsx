import WellnessTopicDetail from '../../components/wellness/WellnessTopicDetail';
import { getTopicBySlug } from '../../data/wellnessTopics';

const SeekingAdvicePage = () => {
    // Fetches the data object for the 'seeking-advice' topic
    const topicData = getTopicBySlug('seeking-advice');

    return (
        <WellnessTopicDetail topic={topicData} />
    );
};

export default SeekingAdvicePage;