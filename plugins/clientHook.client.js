export default async context => {
  await context.store.dispatch('clientHook', context);
  }