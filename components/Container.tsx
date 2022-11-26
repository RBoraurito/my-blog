import clsx from 'clsx'

interface ContainerProps {
  className?: string;
  children: JSX.Element;
  [key: string]: any
}

type Ref = React.Ref<HTMLDivElement | null>

const OuterContainer = (
  { className, children, ...props }: ContainerProps,
  ref: Ref
) => (
    <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  )

const InnerContainer = (
  { className, children, ...props }: ContainerProps,
  ref: Ref
) => (
    <div
      ref={ref}
      className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  )

export const Container = (
  { children, ...props }: ContainerProps,
  ref: Ref
) => (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  )

Container.Outer = OuterContainer
Container.Inner = InnerContainer
