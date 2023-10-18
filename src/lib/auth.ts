import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import { AuthOptions } from "next-auth";
import { prismaClient } from "./prisma";

import { Environment } from "../../environment";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prismaClient),
  providers: [
    GoogleProvider({
      clientId: Environment.GOOGLE_CLIENT_ID,
      clientSecret: Environment.GOOGLE_CLIENT_SECRET,
    }),
  ],
};