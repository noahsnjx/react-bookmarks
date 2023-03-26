export default function paginationFromHydraView(hydraView) {
  return {
    current: parseInt(hydraView["@id"].substring(20), 10),
    first: parseInt(hydraView["hydra:first"].substring(20), 10),
    previous: hydraView["hydra:previous"]
      ? parseInt(hydraView["hydra:previous"].substring(20), 10)
      : undefined,
    next: hydraView["hydra:next"]
      ? parseInt(hydraView["hydra:next"].substring(20), 10)
      : undefined,
    last: parseInt(hydraView["hydra:last"].substring(20), 10),
  };
}
