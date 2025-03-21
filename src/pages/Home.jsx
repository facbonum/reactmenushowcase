import ScrollLinked from '../components/ScrollLinked.jsx';
import { Card, CardContent } from '../components/ui/card.jsx';
import MenuButton from '../components/MenuButton.jsx';
import ConicGradient from '../components/ConicGradient' 

export default function Home() {
  return (
    <div className="p-8">
      <Card>
        <CardContent>
          <h2 className="text-3xl font-bold">Welcome to the React Menu Showcase</h2>
          <p className="mt-4 text-lg">Explore the latest web development features with React, Tailwind CSS, and Framer Motion.</p>
        </CardContent>
      </Card>


<br />
<br />
<br />
<br />
                  {/* 🌟 Conic Gradient Component */}
                  <div className="relative z-10">
                <ConicGradient />
            </div>

            {/* 🌟 Example Content */}
            <div className="relative z-20 p-12"><br /><br />
                <h1 className="text-5xl font-bold mb-8">Welcome to the Home Page</h1>
                <p className="text-lg leading-relaxed">
                    This is the home page of your project, now enhanced with a dynamic conic gradient background effect.
                </p>
            </div>
      <div className="my-12">
        <ScrollLinked />
      </div>

      <div className="mt-8 flex gap-4 flex-wrap">
        <MenuButton imgSrc="/MenuButton.png" label="Menu 1" onClick={() => console.log('Menu 1 Clicked')} />
        <MenuButton imgSrc="/MenuButton.png" label="Menu 2" onClick={() => console.log('Menu 2 Clicked')} />
        <MenuButton imgSrc="/MenuButton.png" label="Menu 3" onClick={() => console.log('Menu 3 Clicked')} />
        
      </div>
    </div>
  );
}
