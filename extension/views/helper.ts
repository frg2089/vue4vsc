import { Disposable, ExtensionContext, Webview, window } from 'vscode'

export class WebviewHelper {
  public static setupHtml(
    webview: Webview,
    context: ExtensionContext,
    entry?: string,
  ) {
    return process.env.VITE_DEV_SERVER_URL
      ? __getWebviewHtml__([process.env.VITE_DEV_SERVER_URL, entry].join('/'))
      : __getWebviewHtml__(webview, context, entry)
  }

  public static setupWebviewHooks(webview: Webview, disposables: Disposable[]) {
    webview.onDidReceiveMessage(
      (message: any) => {
        const type = message.type
        const data = message.data
        console.log(`type: ${type}`)
        switch (type) {
          case 'hello':
            window.showInformationMessage(data)
            return
        }
      },
      undefined,
      disposables,
    )
  }
}
