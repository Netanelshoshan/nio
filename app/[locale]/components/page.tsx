"use client"

import * as React from "react"
import { useTranslations } from "next-intl"
import { toast } from "sonner"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  BoldIcon,
  CalendarIcon,
  ChevronsUpDownIcon,
  CircleCheckIcon,
  CopyIcon,
  CreditCardIcon,
  ItalicIcon,
  LogOutIcon,
  MessageSquareIcon,
  PaperclipIcon,
  PencilIcon,
  RocketIcon,
  SearchIcon,
  SearchXIcon,
  SettingsIcon,
  TerminalIcon,
  Trash2Icon,
  UnderlineIcon,
  UserIcon,
} from "lucide-react"
import { AppPage } from "@/components/app-page"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Attachment, AttachmentContent, AttachmentDescription, AttachmentMedia, AttachmentTitle } from "@/components/ui/attachment"
import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuShortcut, ContextMenuTrigger } from "@/components/ui/context-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"
import { Item, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemSeparator, ItemTitle } from "@/components/ui/item"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Marker, MarkerContent } from "@/components/ui/marker"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar"
import { Message, MessageAvatar, MessageContent } from "@/components/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Spinner } from "@/components/ui/spinner"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export default function ComponentsPage() {
  const t = useTranslations("Components.page")

  return (
    <AppPage>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">{t("title")}</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">{t("description")}</p>
      </div>
      <ButtonsSection />
      <FormsSection />
      <OverlaysSection />
      <NavigationSection />
      <DataDisplaySection />
      <FeedbackSection />
      <ChatSection />
      <LayoutSection />
    </AppPage>
  )
}

function ButtonsSection() {
  const t = useTranslations("Components.buttons")

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-2">
          <Button>{t("primary")}</Button>
          <Button variant="secondary">{t("secondary")}</Button>
          <Button variant="outline">{t("outline")}</Button>
          <Button variant="ghost">{t("ghost")}</Button>
          <Button variant="destructive">{t("destructive")}</Button>
          <Button variant="link">{t("link")}</Button>
        </div>
        <ButtonGroup>
          <Button variant="outline" size="icon" aria-label={t("copy")}>
            <CopyIcon />
          </Button>
          <Button variant="outline" size="icon" aria-label={t("edit")}>
            <PencilIcon />
          </Button>
          <Button variant="outline" size="icon" aria-label={t("delete")}>
            <Trash2Icon />
          </Button>
        </ButtonGroup>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-muted-foreground">{t("badgesLabel")}</span>
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{t("badgeDefault")}</Badge>
            <Badge variant="secondary">{t("badgeSecondary")}</Badge>
            <Badge variant="destructive">{t("badgeDestructive")}</Badge>
            <Badge variant="outline">{t("badgeOutline")}</Badge>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-muted-foreground">{t("formattingLabel")}</span>
          <ToggleGroup type="multiple" variant="outline">
            <ToggleGroupItem value="bold" aria-label={t("bold")}>
              <BoldIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label={t("italic")}>
              <ItalicIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label={t("underline")}>
              <UnderlineIcon />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </CardContent>
    </Card>
  )
}

const frameworkItems = [
  { value: "next", labelKey: "next" },
  { value: "remix", labelKey: "remix" },
  { value: "astro", labelKey: "astro" },
  { value: "gatsby", labelKey: "gatsby" },
] as const

function FormsSection() {
  const t = useTranslations("Components.forms")
  const [date, setDate] = React.useState<Date>()
  const [otp, setOtp] = React.useState("")

  const frameworks = frameworkItems.map((item) => ({
    value: item.value,
    label: t(`frameworks.${item.labelKey}`),
  }))

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-8">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="gallery-name">{t("nameLabel")}</FieldLabel>
            <Input id="gallery-name" placeholder={t("namePlaceholder")} />
          </Field>
          <Field>
            <FieldLabel htmlFor="gallery-email">{t("emailLabel")}</FieldLabel>
            <Input id="gallery-email" type="email" placeholder={t("emailPlaceholder")} />
            <FieldDescription>{t("emailDescription")}</FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="gallery-bio">{t("bioLabel")}</FieldLabel>
            <Textarea id="gallery-bio" placeholder={t("bioPlaceholder")} />
            <FieldDescription>{t("bioDescription")}</FieldDescription>
          </Field>
          <FieldSeparator />
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>{t("notificationsLabel")}</FieldTitle>
              <FieldDescription>{t("notificationsDescription")}</FieldDescription>
            </FieldContent>
            <Switch id="gallery-notifications" defaultChecked />
          </Field>
          <FieldSet>
            <FieldLegend variant="label">{t("planLegend")}</FieldLegend>
            <RadioGroup defaultValue="pro">
              <FieldLabel htmlFor="plan-free">
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>{t("planFree")}</FieldTitle>
                  </FieldContent>
                  <RadioGroupItem value="free" id="plan-free" />
                </Field>
              </FieldLabel>
              <FieldLabel htmlFor="plan-pro">
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>{t("planPro")}</FieldTitle>
                  </FieldContent>
                  <RadioGroupItem value="pro" id="plan-pro" />
                </Field>
              </FieldLabel>
              <FieldLabel htmlFor="plan-enterprise">
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>{t("planEnterprise")}</FieldTitle>
                  </FieldContent>
                  <RadioGroupItem value="enterprise" id="plan-enterprise" />
                </Field>
              </FieldLabel>
            </RadioGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Checkbox id="gallery-terms" />
            <FieldLabel htmlFor="gallery-terms" className="font-normal">
              {t("termsLabel")}
            </FieldLabel>
          </Field>
          <Field>
            <FieldLabel htmlFor="gallery-volume">{t("volumeLabel")}</FieldLabel>
            <Slider id="gallery-volume" defaultValue={[60]} max={100} step={1} />
          </Field>
        </FieldGroup>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field>
            <FieldLabel>{t("otpLabel")}</FieldLabel>
            <InputOTP maxLength={6} value={otp} onChange={setOtp}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <FieldDescription>{t("otpDescription")}</FieldDescription>
          </Field>

          <Field>
            <FieldLabel>{t("dateLabel")}</FieldLabel>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start font-normal">
                  <CalendarIcon data-icon="inline-start" />
                  {date ? date.toLocaleDateString() : t("datePlaceholder")}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={date} onSelect={setDate} />
              </PopoverContent>
            </Popover>
          </Field>

          <Field>
            <FieldLabel>{t("comboboxLabel")}</FieldLabel>
            <Combobox items={frameworks} itemToStringValue={(item: { value: string; label: string }) => item.label}>
              <ComboboxInput placeholder={t("comboboxPlaceholder")} />
              <ComboboxContent>
                <ComboboxEmpty>{t("comboboxEmpty")}</ComboboxEmpty>
                <ComboboxList>
                  {(item: { value: string; label: string }) => (
                    <ComboboxItem key={item.value} value={item}>
                      {item.label}
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </Field>

          <Field>
            <FieldLabel htmlFor="gallery-country">{t("countryLabel")}</FieldLabel>
            <NativeSelect id="gallery-country" defaultValue="il">
              <NativeSelectOption value="il">{t("countries.il")}</NativeSelectOption>
              <NativeSelectOption value="us">{t("countries.us")}</NativeSelectOption>
              <NativeSelectOption value="de">{t("countries.de")}</NativeSelectOption>
              <NativeSelectOption value="jp">{t("countries.jp")}</NativeSelectOption>
            </NativeSelect>
          </Field>
        </div>
      </CardContent>
    </Card>
  )
}

function OverlaysSection() {
  const t = useTranslations("Components.overlays")
  const [commandOpen, setCommandOpen] = React.useState(false)

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setCommandOpen((open) => !open)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap items-center gap-3">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">{t("dialogTrigger")}</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t("dialogTitle")}</DialogTitle>
              <DialogDescription>{t("dialogDescription")}</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button type="submit">{t("save")}</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">{t("alertDialogTrigger")}</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{t("alertDialogTitle")}</AlertDialogTitle>
              <AlertDialogDescription>{t("alertDialogDescription")}</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>{t("cancel")}</AlertDialogCancel>
              <AlertDialogAction>{t("continue")}</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">{t("sheetTrigger")}</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>{t("sheetTitle")}</SheetTitle>
              <SheetDescription>{t("sheetDescription")}</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">{t("drawerTrigger")}</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>{t("drawerTitle")}</DrawerTitle>
              <DrawerDescription>{t("drawerDescription")}</DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">{t("popoverTrigger")}</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>{t("popoverTitle")}</PopoverTitle>
              <PopoverDescription>{t("popoverDescription")}</PopoverDescription>
            </PopoverHeader>
          </PopoverContent>
        </Popover>

        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">@shadcn</Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <p className="text-sm">{t("hoverCardDescription")}</p>
          </HoverCardContent>
        </HoverCard>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">{t("tooltipTrigger")}</Button>
          </TooltipTrigger>
          <TooltipContent>{t("tooltipContent")}</TooltipContent>
        </Tooltip>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">{t("dropdownMenuTrigger")}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <UserIcon />
                {t("profile")}
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCardIcon />
                {t("billing")}
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <LogOutIcon />
              {t("logout")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>{t("menubarFile")}</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                {t("newTab")}
                <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                {t("print")}
                <MenubarShortcut>⌘P</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>{t("menubarView")}</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>{t("reload")}</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

        <ContextMenu>
          <ContextMenuTrigger className="flex h-9 w-40 items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground">
            {t("contextMenuTrigger")}
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>
              {t("back")}
              <ContextMenuShortcut>⌘[</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              {t("forward")}
              <ContextMenuShortcut>⌘]</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>{t("reload")}</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>

        <Button variant="outline" onClick={() => setCommandOpen(true)}>
          {t("commandTrigger")}
          <Kbd>⌘K</Kbd>
        </Button>
        <CommandDialog
          open={commandOpen}
          onOpenChange={setCommandOpen}
          title={t("commandTrigger")}
          description={t("commandPlaceholder")}
        >
          <CommandInput placeholder={t("commandPlaceholder")} />
          <CommandList>
            <CommandEmpty>{t("commandEmpty")}</CommandEmpty>
            <CommandGroup heading={t("commandSuggestions")}>
              <CommandItem>
                <CalendarIcon />
                {t("calendar")}
              </CommandItem>
              <CommandItem>
                <SearchIcon />
                {t("search")}
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading={t("commandSettings")}>
              <CommandItem>
                <SettingsIcon />
                {t("settings")}
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </CardContent>
    </Card>
  )
}

function NavigationSection() {
  const t = useTranslations("Components.navigation")

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>{t("docs")}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-56 gap-1 p-2">
                  <li>
                    <NavigationMenuLink href="/components">{t("components")}</NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="#">{t("pricing")}</NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">{t("breadcrumbHome")}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">{t("breadcrumbLibrary")}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{t("breadcrumbData")}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>

        <Tabs defaultValue="account" className="w-full max-w-md">
          <TabsList>
            <TabsTrigger value="account">{t("tabsAccount")}</TabsTrigger>
            <TabsTrigger value="password">{t("tabsPassword")}</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="text-sm text-muted-foreground">
            {t("tabsAccountDescription")}
          </TabsContent>
          <TabsContent value="password" className="text-sm text-muted-foreground">
            {t("tabsPasswordDescription")}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

const invoiceRows = [
  { invoice: "INV001", statusKey: "statusPaid", method: "Credit Card", amount: "$250.00" },
  { invoice: "INV002", statusKey: "statusPending", method: "PayPal", amount: "$150.00" },
  { invoice: "INV003", statusKey: "statusUnpaid", method: "Bank Transfer", amount: "$350.00" },
] as const

const chartData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
]

function DataDisplaySection() {
  const t = useTranslations("Components.dataDisplay")

  const chartConfig = {
    desktop: { label: t("desktop"), color: "var(--chart-1)" },
    mobile: { label: t("mobile"), color: "var(--chart-2)" },
  } satisfies ChartConfig

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-8">
        <div className="flex items-center gap-2">
          <AvatarGroup>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>KL</AvatarFallback>
            </Avatar>
          </AvatarGroup>
          <AvatarGroupCount>+5</AvatarGroupCount>
        </div>

        <Table>
          <TableCaption>{t("tableCaption")}</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>{t("invoice")}</TableHead>
              <TableHead>{t("status")}</TableHead>
              <TableHead>{t("method")}</TableHead>
              <TableHead className="text-end">{t("amount")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoiceRows.map((row) => (
              <TableRow key={row.invoice}>
                <TableCell className="font-medium">{row.invoice}</TableCell>
                <TableCell>
                  <Badge variant="outline">{t(row.statusKey)}</Badge>
                </TableCell>
                <TableCell>{row.method}</TableCell>
                <TableCell className="text-end">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex flex-col gap-2">
          <div>
            <p className="text-sm font-medium">{t("chartTitle")}</p>
            <p className="text-sm text-muted-foreground">{t("chartDescription")}</p>
          </div>
          <ChartContainer config={chartConfig} className="h-56 w-full">
            <BarChart data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="accessible">
            <AccordionTrigger>{t("accordionAccessible.question")}</AccordionTrigger>
            <AccordionContent>{t("accordionAccessible.answer")}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="styled">
            <AccordionTrigger>{t("accordionStyled.question")}</AccordionTrigger>
            <AccordionContent>{t("accordionStyled.answer")}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="animated">
            <AccordionTrigger>{t("accordionAnimated.question")}</AccordionTrigger>
            <AccordionContent>{t("accordionAnimated.answer")}</AccordionContent>
          </AccordionItem>
        </Accordion>

        <Collapsible className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-medium">{t("collapsibleTrigger")}</span>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="icon-sm">
                <ChevronsUpDownIcon />
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md border px-4 py-2 font-mono text-sm">{t("collapsibleFirst")}</div>
          <CollapsibleContent className="flex flex-col gap-2">
            <div className="rounded-md border px-4 py-2 font-mono text-sm">{t("collapsibleItem1")}</div>
            <div className="rounded-md border px-4 py-2 font-mono text-sm">{t("collapsibleItem2")}</div>
          </CollapsibleContent>
        </Collapsible>

        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {[1, 2, 3, 4].map((index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-2xl font-semibold">
                      {t("carouselSlide")} {index}
                    </span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-muted-foreground">{t("recentActivityTitle")}</span>
          <ItemGroup>
            <Item variant="outline">
              <ItemMedia variant="icon">
                <RocketIcon />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{t("activityDeploy.title")}</ItemTitle>
                <ItemDescription>{t("activityDeploy.description")}</ItemDescription>
              </ItemContent>
            </Item>
            <ItemSeparator />
            <Item variant="outline">
              <ItemMedia variant="icon">
                <MessageSquareIcon />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{t("activityComment.title")}</ItemTitle>
                <ItemDescription>{t("activityComment.description")}</ItemDescription>
              </ItemContent>
            </Item>
            <ItemSeparator />
            <Item variant="outline">
              <ItemMedia variant="icon">
                <CircleCheckIcon />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{t("activityIssue.title")}</ItemTitle>
                <ItemDescription>{t("activityIssue.description")}</ItemDescription>
              </ItemContent>
            </Item>
          </ItemGroup>
        </div>

        <Empty className="border border-dashed">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <SearchXIcon />
            </EmptyMedia>
            <EmptyTitle>{t("emptyTitle")}</EmptyTitle>
            <EmptyDescription>{t("emptyDescription")}</EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button variant="outline" size="sm">
              {t("emptyAction")}
            </Button>
          </EmptyContent>
        </Empty>

        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <span>{t("kbdHint")}</span>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
          <span>{t("kbdHintSuffix")}</span>
        </div>
      </CardContent>
    </Card>
  )
}

function FeedbackSection() {
  const t = useTranslations("Components.feedback")

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <Alert>
          <TerminalIcon />
          <AlertTitle>{t("alertTitle")}</AlertTitle>
          <AlertDescription>{t("alertDescription")}</AlertDescription>
        </Alert>

        <div className="flex flex-wrap items-center gap-4">
          <Button variant="outline" onClick={() => toast(t("toastMessage"))}>
            {t("toastTrigger")}
          </Button>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Spinner />
            {t("spinnerLabel")}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm text-muted-foreground">{t("progressLabel")}</span>
          <Progress value={66} />
        </div>

        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-4 w-32" />
        </div>
      </CardContent>
    </Card>
  )
}

function ChatSection() {
  const t = useTranslations("Components.chat")

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <MessageScrollerProvider>
          <MessageScroller className="relative h-72 rounded-lg border">
            <MessageScrollerViewport>
              <MessageScrollerContent className="p-4">
                <MessageScrollerItem scrollAnchor={false}>
                  <Marker variant="separator">
                    <MarkerContent>{t("today")}</MarkerContent>
                  </Marker>
                </MessageScrollerItem>
                <MessageScrollerItem>
                  <Message align="end">
                    <MessageContent>
                      <Bubble align="end">
                        <BubbleContent>{t("userMessage")}</BubbleContent>
                      </Bubble>
                    </MessageContent>
                  </Message>
                </MessageScrollerItem>
                <MessageScrollerItem>
                  <Message align="start">
                    <MessageAvatar>
                      <Avatar size="sm">
                        <AvatarFallback>{t("assistantName").slice(0, 2)}</AvatarFallback>
                      </Avatar>
                    </MessageAvatar>
                    <MessageContent>
                      <Bubble variant="muted" align="start">
                        <BubbleContent>{t("assistantMessage")}</BubbleContent>
                      </Bubble>
                      <Attachment>
                        <AttachmentMedia>
                          <PaperclipIcon />
                        </AttachmentMedia>
                        <AttachmentContent>
                          <AttachmentTitle>{t("attachmentName")}</AttachmentTitle>
                          <AttachmentDescription>{t("attachmentSize")}</AttachmentDescription>
                        </AttachmentContent>
                      </Attachment>
                    </MessageContent>
                  </Message>
                </MessageScrollerItem>
              </MessageScrollerContent>
            </MessageScrollerViewport>
            <MessageScrollerButton />
          </MessageScroller>
        </MessageScrollerProvider>
      </CardContent>
    </Card>
  )
}

const layoutTags = ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "TypeScript", "Radix"]

function LayoutSection() {
  const t = useTranslations("Components.layout")

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="flex h-5 items-center gap-4 text-sm text-muted-foreground">
          <span>{t("resizableSidebar")}</span>
          <Separator orientation="vertical" />
          <span>{t("resizableContent")}</span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-muted-foreground">{t("tagsLabel")}</span>
          <ScrollArea className="w-full rounded-md border whitespace-nowrap">
            <div className="flex w-max gap-2 p-3">
              {layoutTags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        <ResizablePanelGroup orientation="horizontal" className="h-32 rounded-md border">
          <ResizablePanel
            defaultSize="30"
            className="flex items-center justify-center text-sm text-muted-foreground"
          >
            {t("resizableSidebar")}
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel
            defaultSize="70"
            className="flex items-center justify-center text-sm text-muted-foreground"
          >
            {t("resizableContent")}
          </ResizablePanel>
        </ResizablePanelGroup>

        <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-md bg-muted">
          <div className="flex size-full items-center justify-center text-sm text-muted-foreground">
            16:9
          </div>
        </AspectRatio>
      </CardContent>
    </Card>
  )
}
