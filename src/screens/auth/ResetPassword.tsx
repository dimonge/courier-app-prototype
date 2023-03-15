import React from "react"
import { Stack, Heading, Center, Input } from "native-base"
import { Button } from "../../components"

const ResetPasswordScreen = () => {
  return (
    <Center flex={1} px="3">
      (
      <Stack
        space={4}
        w={{
          base: "75%",
          md: "25%",
        }}
      >
        <Center>
          <Heading textAlign="center" mb="10">
            Reset Password
          </Heading>
        </Center>
        <Input variant="underlined" placeholder="Reset password" />
        <Input variant="underlined" placeholder="Confirm password" />
        <Button text="Reset" colorScheme="secondary" />
      </Stack>
    </Center>
  )
}

export default ResetPasswordScreen
