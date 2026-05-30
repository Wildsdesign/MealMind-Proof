type VoiceToolInput =
  | { type: "ADD_ITEM"; itemName: string; quantity?: number }
  | { type: "REMOVE_ITEM"; itemName: string }
  | { type: "GET_CART" }
  | { type: "SUBMIT_ORDER" };

export async function executeVoiceTool(
  session: PatientSession,
  input: VoiceToolInput,
): Promise<VoiceToolResult> {
  switch (input.type) {
    case "ADD_ITEM": {
      const match = await findAllowedMenuItem(session, input.itemName);
      if (!match) {
        return { spoken: `I could not find ${input.itemName} on this menu.` };
      }

      await addItemToCart(session, match.id, input.quantity ?? 1);
      return { spoken: `I added ${match.displayName}.` };
    }

    case "REMOVE_ITEM":
      await removeItemFromCart(session, input.itemName);
      return { spoken: `I removed ${input.itemName}.` };

    case "GET_CART":
      return { spoken: await summarizeCart(session) };

    case "SUBMIT_ORDER":
      await submitOrderThroughBackend(session);
      return { spoken: "Your order has been submitted." };
  }
}

type PatientSession = {
  internalPatientId: string;
  tenantId: string;
};

type VoiceToolResult = {
  spoken: string;
};

async function findAllowedMenuItem(session: PatientSession, itemName: string) {
  return { id: "menu-item-id", displayName: itemName };
}

async function addItemToCart(session: PatientSession, itemId: string, quantity: number) {}
async function removeItemFromCart(session: PatientSession, itemName: string) {}
async function summarizeCart(session: PatientSession) { return "You have one item in your cart."; }
async function submitOrderThroughBackend(session: PatientSession) {}
