/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    global: import("@/schemas/global").GlobalSchema
  }
}

declare module "@data-slot/tabs"
declare module "@data-slot/accordion"
declare module "@data-slot/navigation-menu"
