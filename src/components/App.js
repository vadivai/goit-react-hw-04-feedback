import { Component } from 'react';
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

  // const { good, neutral, bad } = this.state;
  // const total = good + neutral + bad;
  // const positiveFeedbackPercentage = Math.round((good / this.countTotalFeedback()) * 100);

  onUpdateState = stateKey => {
    this.setState(prevState => {
      return {
        [stateKey]: prevState[stateKey] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  const total = this.countTotalFeedback();
  const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.onUpdateState}
        />
      </Section>
      <Section title="Statistics">
        <StatisticsStyle>
          {total > 0 ? (
            <Statistics
              options={this.state}
              total={total}
              positivePercentage={positiveFeedbackPercentage}
            />
          ) : (
            <Notification />
          )}
        </StatisticsStyle>
      </Section>
      <GlobalStyle />
    </>
  );
};
