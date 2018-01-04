
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('behavior').del()
    .then(function () {
      // Inserts seed entries
      return knex('behavior').insert([
        {question: 'Tell me about yourself.', answer: ''},
        {question: 'Tell me about a project you have worked on.', answer: ''},
        {question: 'Do you have any questions for us? (knowledge of company, team/workflow questions, no salary/compensation)', answer: ''},
        {question: 'Which of your managers gets the best results and most value out of you and why?', answer: ''},
        {question: 'If I were to ask your last set of coworkers to describe you, what do you think they\'d say?', answer: ''},
        {question: 'Have you made an account on our website and what do you think can be improved about the process?', answer: ''},
        {question: 'What’s the one thing we haven’t asked you about that you want to make sure we know?', answer: ''},
        {question: 'When you don’t know the answer to something, what is the first thing that you do?', answer: ''},
        {question: 'If you could design your dream job, what would it look like?', answer: ''},
        {question: 'Can you tell me about a side project you\'ve worked on (outside of school or work) in the past year or so?', answer: ''},
        {question: 'Tell me about your process of getting work done. When you get a new job or take on a new project, how do you go about doing it successfully?', answer: ''},
        {question: 'How did you first learn to program and what was the first thing you built?', answer: ''},
        {question: 'Describe a coworker\'s working style.', answer: ''},
        {question: 'What’s your biggest weakness?', answer: ''},
        {question: 'If you could master one technology this year, what would it be?', answer: ''},
        {question: 'What books are on your reading list?', answer: ''},
        {question: 'How do you handle criticism?', answer: ''},
        {question: 'Who are your heroes?', answer: ''},
        {question: 'Why do you want to work here?', answer: ''},
        {question: 'Describe a situation when you did much more than it was expected from you to get the project done. Were your efforts recognized? By whom and how? How did that make you feel?', answer: ''},
        {question: 'Where do you see yourself in 3 years?', answer: ''},
        {question: 'Describe a situation in which you met a major obstacle in order to complete a project. How did you deal with it? What steps did you take?', answer: ''},
        {question: 'I’d be interested in hearing about a miscommunication you had with your supervisor. How did you solve it? What was the reason for that? How did you deal with that situation?', answer: ''},
        {question: 'Give an example of a time when you didn’t agree with other programmer. Did you stand up for something that you believed was right?', answer: ''},
        {question: 'Tell me about a time when you had to work with a difficult person to accomplish a goal. What was the biggest challenge? How did you handle it?', answer: ''},
        {question: 'Give me an example of a time you had to take a creative and unusual approach to solve coding problem. How did this idea come to your mind? Why do you think it was unusual?', answer: ''},
        {question: 'Give me an example of a project that completely failed. Why do you think it was a failure? Could there be anything done differently in order to turn it into success?', answer: ''}
     
      
      ]);
    });
};
