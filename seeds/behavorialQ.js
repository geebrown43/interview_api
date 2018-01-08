
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('behavior').del()
    .then(function () {
      // Inserts seed entries
      return knex('behavior').insert([
        {value: 1, label: 'Tell me about yourself.', answer: ''},
        {value: 2, label: 'Tell me about a project you have worked on.', answer: ''},
        {value: 3, label: 'Do you have any questions for us? (knowledge of company, team/workflow questions, no salary/compensation)', answer: ''},
        {value: 4, label: 'Which of your managers gets the best results and most value out of you and why?', answer: ''},
        {value: 5, label: 'If I were to ask your last set of coworkers to describe you, what do you think they\'d say?', answer: ''},
        {value: 6, label: 'Have you made an account on our website and what do you think can be improved about the process?', answer: ''},
        {value: 7, label: 'What’s the one thing we haven’t asked you about that you want to make sure we know?', answer: ''},
        {value: 8, label: 'When you don’t know the answer to something, what is the first thing that you do?', answer: ''},
        {value: 9, label: 'If you could design your dream job, what would it look like?', answer: ''},
        {value: 10, label: 'Can you tell me about a side project you\'ve worked on (outside of school or work) in the past year or so?', answer: ''},
        {value: 11, label: 'Tell me about your process of getting work done. When you get a new job or take on a new project, how do you go about doing it successfully?', answer: ''},
        {value: 12, label: 'How did you first learn to program and what was the first thing you built?', answer: ''},
        {value: 13, label: 'Describe a coworker\'s working style.', answer: ''},
        {value: 14, label: 'What’s your biggest weakness?', answer: ''},
        {value: 15, label: 'If you could master one technology this year, what would it be?', answer: ''},
        {value: 16, label: 'What books are on your reading list?', answer: ''},
        {value: 17, label: 'How do you handle criticism?', answer: ''},
        {value: 18, label: 'Who are your heroes?', answer: ''},
        {value: 19, label: 'Why do you want to work here?', answer: ''},
        {value: 20, label: 'Describe a situation when you did much more than it was expected from you to get the project done. Were your efforts recognized? By whom and how? How did that make you feel?', answer: ''},
        {value: 21, label: 'Where do you see yourself in 3 years?', answer: ''},
        {value: 22, label: 'Describe a situation in which you met a major obstacle in order to complete a project. How did you deal with it? What steps did you take?', answer: ''},
        {value: 23, label: 'I’d be interested in hearing about a miscommunication you had with your supervisor. How did you solve it? What was the reason for that? How did you deal with that situation?', answer: ''},
        {value: 24, label: 'Give an example of a time when you didn’t agree with other programmer. Did you stand up for something that you believed was right?', answer: ''},
        {value: 25, label: 'Tell me about a time when you had to work with a difficult person to accomplish a goal. What was the biggest challenge? How did you handle it?', answer: ''},
        {value: 26, label: 'Give me an example of a time you had to take a creative and unusual approach to solve coding problem. How did this idea come to your mind? Why do you think it was unusual?', answer: ''},
        {value: 27, label: 'Give me an example of a project that completely failed. Why do you think it was a failure? Could there be anything done differently in order to turn it into success?', answer: ''}
      ]);
    });
};
