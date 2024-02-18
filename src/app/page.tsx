import { PasswordGenerator } from '@/components/PasswordGenerator';

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-4/5 min-w-[375px] max-w-screen-xl items-center justify-center px-4 py-24">
      <PasswordGenerator className="shrink-1 grow-0 basis-[540px]" />
    </main>
  );
}
