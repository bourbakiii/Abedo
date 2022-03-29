export default async context => {
  console.log("ты работаешь*")
  await context.store.dispatch('clientHook', context);
  }