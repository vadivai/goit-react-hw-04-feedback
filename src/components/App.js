import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import {
  Section,
  FeedbackOptions,
  Statistics,
  StatisticsStyle,
} from 'components';
import { Notification } from './Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onUpdateFeedback = key => {
    switch (key) {
      case good:
        setGood(prevItem => prevItem + 1);
        break;
      case neutral:
        setNeutral(prevItem => prevItem + 1);
        break;
      case bad:
        setBad(prevItem => prevItem + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const total = countTotalFeedback();
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();

  const feedback = { good, neutral, bad };
  const options = { good, neutral, bad, total, positiveFeedbackPercentage };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedback}
          onLeaveFeedback={onUpdateFeedback}
        />
      </Section>
      <Section title="Statistics">
        <StatisticsStyle>
          {total > 0 ? <Statistics options={options} /> : <Notification />}
        </StatisticsStyle>
      </Section>
      <GlobalStyle />
    </>
  );
};
