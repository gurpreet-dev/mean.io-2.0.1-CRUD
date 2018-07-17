import Test from '../models/test.model';

function create(params) {
    const test = new Test({
      name: params.body.name,
      email: params.body.email
    });
    return test.save();

    console.log("in test controller");
  }

  export default { create };