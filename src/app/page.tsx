import Link from "next/link";

const HomePage = () => {
  return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
              <h1 className="text-6xl font-bold text-primary">SandmitGPT</h1>
              <p className="py-6 text-lg leading-loose">
                  SandmitGPT is a cutting-edge AI tool that generates creative content using GPT-3.
              </p>
              <Link href="/chat" className="btn btn-secondary">GET STARTED</Link>
          </div>
        </div>
      </div>
  )
}

export default HomePage;