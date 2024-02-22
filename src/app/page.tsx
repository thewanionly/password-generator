import { PasswordGenerator } from '@/components/PasswordGenerator';
import { DEFAULT_PASSWORD_LENGTH } from '@/constants/password';

export default function Home() {
  return (
    <main className="mx-auto my-16 flex w-4/5 min-w-[375px] max-w-screen-xl justify-center md:my-32">
      <PasswordGenerator
        className="shrink-1 grow-0 basis-[540px]"
        initialCharLength={DEFAULT_PASSWORD_LENGTH}
        initialAppliedRules={{
          withLowerCase: true,
          withUpperCase: true,
        }}
      />
    </main>
  );
}
