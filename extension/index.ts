import { MainPanel } from '@e/views/panel'
import * as vscode from 'vscode'

export const activate = async (context: vscode.ExtensionContext) => {
  // Add command to the extension context
  context.subscriptions.push(
    vscode.commands.registerCommand('hello-world.showHelloWorld', async () => {
      MainPanel.render(context)
    }),
  )
}

export const deactivate = () => {}
