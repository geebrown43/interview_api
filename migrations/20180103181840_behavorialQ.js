
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('behavior', (table) => {
          table.increments().primary()
          table.text('question')
          table.text('answer')
      })
  ])
};

exports.down = function(knex, Promise) {
    knex.schema.dropTable('behavior')
};
