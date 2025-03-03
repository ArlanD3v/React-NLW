import { Button } from "@/components/button";
import { InputRoot, InputIcon, InputField } from "@/components/input";
import { UserRound, Mail, AtSign, TicketCheck } from "lucide-react";

export function SubscriptionForm(){
	return(
		<form className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]">
          <h2 className="font-heading font-semibold text-gray-200 text-xl">
            Registration
          </h2>
          <div className="space-y-3">
            <InputRoot >
              <InputIcon>
                <UserRound className="size-5 text-[#b6ffa0]" />
              </InputIcon>
              <InputField
                className="cursor-none"
                type="text"
                placeholder="Full name"
              />
            </InputRoot>

            <InputRoot >
              <InputIcon>
                <Mail className="size-5 text-[#31a2ff]" />
              </InputIcon>
              <InputField
                className="cursor-none"
                type="email"
                placeholder="E-mail"
              />
            </InputRoot>

            <InputRoot className="focus-within:border-secondary">
              <InputIcon>
                <AtSign className="size-5 text-secondary" />
              </InputIcon>
              <InputField
                className="cursor-none"
                type="text"
                placeholder="Social Media"
              />
            </InputRoot>
          </div>

          <Button type="submit">
            Confirm
            <TicketCheck />
          </Button>
        </form>
	)
}