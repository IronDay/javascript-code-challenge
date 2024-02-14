export function CounterOps(init: number) {
    let count = init;
    return {increment: () => (count += 1), decrement: () => (count -= 1), reset: () => (count = init)}
}