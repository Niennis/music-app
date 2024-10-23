import Image from "next/image";
import Dashboard from "./ui/Dashboard";

export default function Home() {

  return (
    <div className="from-amber-200 via-teal-200 to-sky-400 bg-gradient-to-br grid grid-rows-[0px_1fr_20px] justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]" >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start" style={{ width: '100vw' }}>
        <div style={{
          height: '200',
          overflow: 'hidden',
          position: 'relative'
        }}>
          <Image
            src='/pexels-pauldeetman-2960891.jpg'
            alt="imagen cabecera"
            height={0}
            width={0}
            sizes="100vw"
            priority // Carga optimizada para imágenes importantes
            style={{
              objectFit: 'cover',
              objectPosition: 'center center',
              height: '300px',
              width: '100vw',
            }}
          />
        </div>

        <Dashboard />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a target="_blank" href="https://icons8.com/icon/ccgas5DPDLhR/music">Music</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
      </footer>
    </div>
  );
}
