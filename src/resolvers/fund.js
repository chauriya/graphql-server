export default {
  Query: {
    funds: (parent, args, { models }) => {
      return Object.values(models.funds);
    },
    fund: (parent, { id }, { models }) => {
      return models.funds[id];
    },
    benchmarks: (parent, args, { models }) => {
      return Object.values(models.benchmark);
    },
    benchmark: (parent, { id }, { models }) => {
      return models.benchmark[id];
    }
  }
};
