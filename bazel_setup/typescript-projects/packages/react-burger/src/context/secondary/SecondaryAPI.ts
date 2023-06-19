
interface SecondaryContextType {
  session: SecondarySession;
  actions: SecondaryActions;
}

interface SecondarySession {
  appId: string;
  secondary: string | undefined;
  withSecondary(newItemId?: string | undefined): SecondarySession;
}


interface SecondaryActions {
  handleSecondary(newItemId?: string | undefined): void;
}

export type { SecondaryContextType, SecondarySession, SecondaryActions };