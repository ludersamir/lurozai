import * as React from 'react'
import { type UseChatHelpers } from 'ai/react'

import { addMessageAtom, inputAtom } from '@/atoms/chat'
import { shareChat } from '@/app/actions'
import { Button } from '@/components/ui/button'
import { PromptForm } from '@/components/prompt-form'
import { ButtonScrollToBottom } from '@/components/button-scroll-to-bottom'
import { IconRefresh, IconShare, IconStop } from '@/components/ui/icons'
import { FooterText } from '@/components/footer'
import { ChatShareDialog } from '@/components/chat-share-dialog'
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { string } from 'zod'
import { useWallet } from '@solana/wallet-adapter-react'


// import { Textarea } from "../ui/textarea";

export interface ChatPanelProps
  extends Pick<
    UseChatHelpers,
    | 'append'
    | 'isLoading'
    | 'reload'
    | 'messages'
    | 'stop'
    | 'input'
    | 'setInput'
  > {
  id?: string
  title?: string
}

export function ChatPanel({
  id,
  title,
  isLoading,
  stop,
  append,
  reload,
  input,
  setInput,
  messages
}: ChatPanelProps) {
  const [shareDialogOpen, setShareDialogOpen] = React.useState(false)

  const [inputValue, setInputValue] = useAtom(inputAtom);
  const [isHandling, addMessageHandler] = useAtom(addMessageAtom);
  const wallet = useWallet()
  
  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   console.log("----------------------", inputValue, isHandling)
  //   setInputValue(inputValue)
  //   await addMessageHandler("generate");

  // }

 React.useEffect(() => {
 
   const ownerAddress = wallet.publicKey?.toBase58()
 
   console.log("address", ownerAddress)
   
 }, [])
  return (
    <div className="fixed inset-x-0 bottom-0 w-full bg-gradient-to-b from-muted/30 from-0% to-muted/30 to-50% animate-in duration-300 ease-in-out dark:from-background/10 dark:from-10% dark:to-background/80 peer-[[data-state=open]]:group-[]:lg:pl-[250px] peer-[[data-state=open]]:group-[]:xl:pl-[300px]">
      <ButtonScrollToBottom />
      <div className="mx-auto lg:max-w-3xl sm:px-4">
        <div className="flex items-center justify-center h-12">
          {isLoading ? (
            <Button
              variant="outline"
              onClick={() => stop()}
              className="bg-background"
            >
              <IconStop className="mr-2" />
              Stop generating
            </Button>
          ) : (
            messages?.length >= 2 && (
              <div className="flex space-x-2">
                <Button variant="outline" onClick={() => reload()}>
                  <IconRefresh className="mr-2" />
                  Regenerate response
                </Button>
                {id && title ? (
                  <>
                    <Button
                      variant="outline"
                      onClick={() => setShareDialogOpen(true)}
                    >
                      <IconShare className="mr-2" />
                      Share
                    </Button>
                    {/* <ChatShareDialog
                      open={shareDialogOpen}
                      onOpenChange={setShareDialogOpen}
                      onCopy={() => setShareDialogOpen(false)}
                      shareChat={shareChat}
                      chat={{
                        id,
                        title,
                        messages
                      }}
                    /> */}
                  </>
                ) : null}
              </div>
            )
          )}
        </div>
        <div className="px-4 py-2 space-y-4 bg-transparent sm:rounded-t-xl md:py-4">
          {/* <PromptForm
            onSubmit={handleSubmit}
            input={inputValue}
            setInput={setInputValue}
            isLoading={isLoading}
          /> */}
          {/* <form onSubmit={handleSubmit}>
            <Textarea
              className="h-auto peer"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e:React.FormEvent<HTMLFormElement>) => {
                setInputValue(e.target.value);
              }}
            />
          </form> */}
          <PromptForm
            onSubmit={async value => {
              await append({
                id,
                content: value,
                role: 'user'
              })
            }}
            input={input}
            setInput={setInput}
            isLoading={isLoading}
          />
          <FooterText className="hidden sm:block" />
        </div>
      </div>
    </div>
  )
}
