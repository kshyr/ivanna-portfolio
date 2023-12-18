export default function HeroSection() {
  return (
    <section className="flex w-full justify-between px-16">
      <div className="flex gap-2 flex-col">
        <div>
          <h1 className="text-xl font-semibold leading-[48px]">
            Ivanna Pavlyk
          </h1>
          <h2 className="text-xl font-semibold">UX Designer</h2>
        </div>
        <h3 className="font-medium mt-1">
          UX/UI designer and researcher based in Winnipeg, Canada
        </h3>
        <p className="max-w-xl opacity-70 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          posuere arcu nisl, et vehicula libero tincidunt a. Maecenas vel
          scelerisque nunc. Aenean venenatis quam lectus, et sollicitudin elit
          ultrices ut. Donec tincidunt semper enim quis rhoncus. Proin vitae
          ullamcorper justo.
        </p>
      </div>
      <div className="bg-foreground w-[530px] rounded-3xl" />
    </section>
  );
}
