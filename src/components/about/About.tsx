import incorrectImg from '@assets/incorrect.svg'
import correctImg from '@assets/correct.svg'

function About() {
    return (
        <section className="w-10/12 max-w-[400px] m-auto text-secondary mb-24">
            <h2 className="text-center text-3xl mb-3">How it works</h2>
            <p className=" text-paragraph">
                When working with nested border radii it can be tricky to make it look right. Just putting the same radius on both elements does not
                look good.
            </p>
            <p className="mt-3  text-paragraph">
                In this example we put <code className="text-primary text-sm">border-radius: 32px;</code> on both elements and we can see how the
                corners look off.
            </p>
            <div className="mt-6 w-full aspect-square border-2 border-primary borderBoxShadow rounded-[32px] p-3">
                <div className="w-full h-full border-2 border-secondary borderBoxShadow inner rounded-[32px] flex items-center justify-center">
                    <img src={incorrectImg} alt="incorrect img" className="w-1/4 max-w-[64px]" />
                </div>
            </div>
            <p className="mt-6  text-paragraph">
                Instead we have to take some things into count to set the correct radius.
            </p>
            <ul className="list-disc text-paragraph mt-3">
                <li>The radius of the parent element</li>
                <li>The padding of the parent element</li>
            </ul>
            <p className="mt-3  text-paragraph">
                To then calculate the correct inner radius we subtract the padding from the outer radius. So in this case we subtract <code className="text-primary text-sm">32 - 12 = 20</code> 
            </p>
            <div className="mt-6 w-full aspect-square border-2 border-primary borderBoxShadow rounded-[32px] p-3">
                <div className="w-full h-full border-2 border-secondary borderBoxShadow inner rounded-[20px] flex items-center justify-center">
                    <img src={correctImg} alt="correct img" className="w-1/4 max-w-[64px]" />
                </div>
            </div>
        </section>
    );
}

export default About;
