export interface IVisitorObserver {
  notify(farmId: number, data: string): void
  delete(): void
}