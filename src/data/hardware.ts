import bookScannerImage from '../assets/images/service-document-studio.png'
import documentScannerImage from '../assets/images/scanner-it-hardware.webp'
import flatbedScannerImage from '../assets/images/photo-scanning.webp'
import largeFormatScannerImage from '../assets/images/large-format-scanning.webp'
import networkImage from '../assets/images/gis-services.webp'
import operationsImage from '../assets/images/document-digitization.webp'
import storageImage from '../assets/images/service-information-systems.png'
import workstationImage from '../assets/images/data-conversion.webp'

export const hardwareCategoryOrder = [
  'Book scanners',
  'Production document scanners',
  'Flatbed & photo scanners',
  'Large-format scanners',
  'Workstations & laptops',
  'Servers & storage',
  'Network equipment',
  'Printers & displays',
  'Operations accessories',
] as const

export type HardwareCategory = typeof hardwareCategoryOrder[number]

export interface HardwareItem {
  id: string
  name: string
  brand: string
  category: HardwareCategory
  description: string
  features: string[]
  usage: string
  image: string
  imageAlt: string
  recordedUnits: string
}

const categoryImages: Record<HardwareCategory, { src: string; alt: string }> = {
  'Book scanners': { src: bookScannerImage, alt: 'Representative book-scanning workstation' },
  'Production document scanners': { src: documentScannerImage, alt: 'Representative production document-scanning equipment' },
  'Flatbed & photo scanners': { src: flatbedScannerImage, alt: 'Representative flatbed photographic scanning workstation' },
  'Large-format scanners': { src: largeFormatScannerImage, alt: 'Representative large-format scanner handling a technical drawing' },
  'Workstations & laptops': { src: workstationImage, alt: 'Representative workstation used for digital information processing' },
  'Servers & storage': { src: storageImage, alt: 'Representative digital storage and information-management environment' },
  'Network equipment': { src: networkImage, alt: 'Representative networked technology environment' },
  'Printers & displays': { src: documentScannerImage, alt: 'Representative office imaging and display equipment' },
  'Operations accessories': { src: operationsImage, alt: 'Representative equipment supporting document-digitization operations' },
}

function item(input: Omit<HardwareItem, 'image' | 'imageAlt'>): HardwareItem {
  const visual = categoryImages[input.category]
  return { ...input, image: visual.src, imageAlt: visual.alt }
}

export const hardwareItems: HardwareItem[] = [
  item({ id: 'plustek-opticbook-a300-plus', name: 'OpticBook A300 Plus', brand: 'Plustek', category: 'Book scanners', description: 'A large-format book-scanning model recorded in the SAT asset workbook.', features: ['A3 book capture', 'Book-edge scanning design', 'Searchable-output workflow support'], usage: 'Bound books, registers and large-format publications.', recordedUnits: '5' }),
  item({ id: 'plustek-opticbook-a300', name: 'OpticBook A300', brand: 'Plustek', category: 'Book scanners', description: 'A book-edge scanner recorded for bound and large-page source material.', features: ['A3 book capture', 'Book-edge scanning design', 'One-touch scanning controls'], usage: 'Bound publications and source material that should remain intact.', recordedUnits: '3' }),
  item({ id: 'plustek-opticbook-3600', name: 'OpticBook 3600', brand: 'Plustek', category: 'Book scanners', description: 'A compact book-scanning model recorded in the equipment inventory.', features: ['Book-edge capture', 'Flatbed scanning format', 'OCR-oriented workflow'], usage: 'Books, magazines and other bound originals.', recordedUnits: '2' }),
  item({ id: 'czur-et240', name: 'ET240', brand: 'CZUR', category: 'Book scanners', description: 'An overhead scanner model recorded in the workbook; the exact commercial model designation requires confirmation.', features: ['Overhead capture', 'Book and document imaging', 'Contact-light workflow'], usage: 'Bound volumes and documents suited to overhead capture.', recordedUnits: '1' }),

  item({ id: 'canon-dr-g2090', name: 'DR-G2090', brand: 'Canon', category: 'Production document scanners', description: 'A production document-scanner model recorded in the workbook.', features: ['Production document capture', 'Sheet-fed workflow', 'Batch scanning'], usage: 'High-volume office records and document-digitization projects.', recordedUnits: '1' }),
  item({ id: 'canon-dr-x10c', name: 'imageFORMULA DR-X10C', brand: 'Canon', category: 'Production document scanners', description: 'A production document scanner represented by two workbook asset rows.', features: ['Production document capture', 'Sheet-fed workflow', 'Batch processing'], usage: 'Large document batches requiring an organized capture workflow.', recordedUnits: '2' }),
  item({ id: 'canon-dr-g1100', name: 'imageFORMULA DR-G1100', brand: 'Canon', category: 'Production document scanners', description: 'A production-class document scanner recorded in the SAT equipment inventory.', features: ['Production document capture', 'Automatic document feeding', 'Batch workflow'], usage: 'Operational records and sustained document-capture work.', recordedUnits: '2' }),
  item({ id: 'canon-dr-9050c', name: 'imageFORMULA DR-9050C', brand: 'Canon', category: 'Production document scanners', description: 'A document-scanning model recorded for production imaging work.', features: ['Production document capture', 'Sheet-fed scanning', 'Batch workflow'], usage: 'Paper archives and structured scanning projects.', recordedUnits: '1' }),
  item({ id: 'canon-dr-6030c', name: 'imageFORMULA DR-6030C', brand: 'Canon', category: 'Production document scanners', description: 'A departmental document-scanner model consolidated from five workbook rows.', features: ['Document capture', 'Sheet-fed workflow', 'Repeated model fleet'], usage: 'Departmental records and medium-to-large scanning batches.', recordedUnits: '5' }),

  item({ id: 'canon-canoscan-9000f-mark-ii', name: 'CanoScan 9000F Mark II', brand: 'Canon', category: 'Flatbed & photo scanners', description: 'A flatbed photo-scanner model consolidated from three workbook rows.', features: ['Flatbed capture', 'Photographic-material workflow', 'Individual-item scanning'], usage: 'Photographs and selected flat originals.', recordedUnits: '3' }),
  item({ id: 'colortrac-smartlf-ci40', name: 'SmartLF Ci 40', brand: 'Colortrac', category: 'Large-format scanners', description: 'A wide-format scanner recorded in the SAT asset workbook.', features: ['Wide-format capture', 'Technical-document workflow', 'Large original handling'], usage: 'Plans, drawings, maps and oversized paper records.', recordedUnits: '1' }),

  item({ id: 'hp-prodesk-600-pcimt', name: 'ProDesk 600 PCIMT', brand: 'HP', category: 'Workstations & laptops', description: 'A desktop-computer model consolidated from four workbook rows.', features: ['Desktop workstation', 'Project-processing support', 'Repeated model fleet'], usage: 'Digitization workstations and general project operations.', recordedUnits: '4' }),
  item({ id: 'dell-optiplex-9020', name: 'OptiPlex 9020', brand: 'Dell', category: 'Workstations & laptops', description: 'A desktop workstation consolidated from nine workbook rows.', features: ['Desktop workstation', 'Project-processing support', 'Repeated model fleet'], usage: 'Image review, file preparation and operational computing.', recordedUnits: '9' }),
  item({ id: 'dell-optiplex-990', name: 'OptiPlex 990', brand: 'Dell', category: 'Workstations & laptops', description: 'A desktop workstation model recorded in the equipment inventory.', features: ['Desktop workstation', 'General processing', 'Office form factor'], usage: 'General project administration and file-processing support.', recordedUnits: '1' }),
  item({ id: 'asus-cpu-unconfirmed', name: 'Desktop CPU — model not recorded', brand: 'ASUS', category: 'Workstations & laptops', description: 'An ASUS desktop unit is listed, but its precise model is not recorded in the workbook.', features: ['Desktop computing', 'Model confirmation required'], usage: 'General workstation support; exact configuration requires confirmation.', recordedUnits: '1' }),
  item({ id: 'lenovo-thinkpad-t490', name: 'ThinkPad T490', brand: 'Lenovo', category: 'Workstations & laptops', description: 'A business-laptop model consolidated from three workbook rows.', features: ['Portable workstation', 'Business laptop format', 'Repeated model fleet'], usage: 'Mobile project coordination and general business computing.', recordedUnits: '3' }),

  item({ id: 'synology-ds1621-plus', name: 'DiskStation DS1621+', brand: 'Synology', category: 'Servers & storage', description: 'A six-bay network-attached storage model recorded in the workbook.', features: ['Network-attached storage', 'Six drive bays', 'Centralized file management'], usage: 'Centralized project-file storage, sharing and data protection workflows.', recordedUnits: '1' }),
  item({ id: 'synology-ds1813-plus', name: 'DiskStation DS1813+', brand: 'Synology', category: 'Servers & storage', description: 'An eight-bay network-attached storage model recorded in the workbook.', features: ['Network-attached storage', 'Eight drive bays', 'Centralized file management'], usage: 'Shared storage and archived project data.', recordedUnits: '1' }),
  item({ id: 'synology-nas-model-unconfirmed', name: 'DiskStation NAS — model not recorded', brand: 'Synology', category: 'Servers & storage', description: 'A further Synology NAS is listed without a model designation.', features: ['Network-attached storage', 'Model confirmation required'], usage: 'Network storage; exact capacity and configuration require confirmation.', recordedUnits: '1' }),

  item({ id: 'tp-link-8-port-gigabit-switch', name: '8-Port Gigabit Desktop Switch', brand: 'TP-Link', category: 'Network equipment', description: 'An eight-port desktop network switch recorded without a precise model number.', features: ['Eight network ports', 'Gigabit-class designation', 'Desktop form factor'], usage: 'Connecting workstations and supporting equipment on a local network.', recordedUnits: '1' }),
  item({ id: 'trendnet-teg-204ws', name: 'TEG-204WS 20-Port Gigabit Web Smart Switch', brand: 'TRENDnet', category: 'Network equipment', description: 'A web-managed network switch recorded in the workbook.', features: ['20-port designation', 'Gigabit-class designation', 'Web-smart switch'], usage: 'Network connectivity for project workstations and storage equipment.', recordedUnits: '1' }),
  item({ id: 'trendnet-tl2-g244', name: 'TL2-G244 24-Port Gigabit Layer 2 Switch', brand: 'TRENDnet', category: 'Network equipment', description: 'A managed Layer 2 network switch recorded in the workbook.', features: ['24-port designation', 'Gigabit-class designation', 'Managed Layer 2 switch'], usage: 'Structured connectivity across storage and processing equipment.', recordedUnits: '1' }),

  item({ id: 'hp-laserjet-p1102', name: 'LaserJet P1102', brand: 'HP', category: 'Printers & displays', description: 'A laser-printer model recorded in the SAT asset workbook.', features: ['Laser printing', 'Desktop form factor', 'Office-document output'], usage: 'General office and project-document printing.', recordedUnits: '1' }),
  item({ id: 'canon-pixma-model-unconfirmed', name: 'PIXMA — model not recorded', brand: 'Canon', category: 'Printers & displays', description: 'A Canon PIXMA printer is listed without a precise model number.', features: ['Desktop printer', 'Model confirmation required'], usage: 'General office printing; exact output capabilities require confirmation.', recordedUnits: '1' }),
  item({ id: 'lenovo-thinkvision-model-unconfirmed', name: 'ThinkVision — model not recorded', brand: 'Lenovo', category: 'Printers & displays', description: 'A Lenovo ThinkVision display is recorded without a precise model number.', features: ['Desktop display', 'Model confirmation required'], usage: 'Workstation display and visual file review.', recordedUnits: '1' }),

  item({ id: 'operations-trolley', name: 'Equipment trolley', brand: 'Not recorded', category: 'Operations accessories', description: 'Mobile equipment trolleys recorded in the workbook.', features: ['Mobile equipment support', 'Operational accessory'], usage: 'Moving or positioning project equipment and materials.', recordedUnits: '3' }),
  item({ id: 'operations-banquet-table', name: 'Project work table', brand: 'Not recorded', category: 'Operations accessories', description: 'Banquet-style work tables recorded for project operations.', features: ['Temporary work surface', 'Operational accessory'], usage: 'Document preparation and temporary project work areas.', recordedUnits: '5' }),
  item({ id: 'operations-extension-plug', name: 'Extension plugs', brand: 'Not recorded', category: 'Operations accessories', description: 'Electrical extension accessories recorded in the workbook.', features: ['Power-distribution accessory', 'Operational support'], usage: 'Supporting temporary equipment and workstation layouts.', recordedUnits: '21' }),
  item({ id: 'operations-big-box', name: 'Large storage boxes', brand: 'Not recorded', category: 'Operations accessories', description: 'Large storage boxes recorded for operational use.', features: ['Material organization', 'Operational storage'], usage: 'Organizing project materials during handling and preparation.', recordedUnits: '5' }),
  item({ id: 'operations-small-box', name: 'Small storage box', brand: 'Not recorded', category: 'Operations accessories', description: 'A small storage box recorded for operational use.', features: ['Material organization', 'Operational storage'], usage: 'Organizing smaller project materials and accessories.', recordedUnits: '1' }),
  item({ id: 'operations-ip-cable', name: 'Network cables', brand: 'Not recorded', category: 'Operations accessories', description: 'Network cabling recorded in the equipment workbook.', features: ['Wired network connection', 'Infrastructure accessory'], usage: 'Connecting workstations, storage and network equipment.', recordedUnits: '10+' }),
]

export const hardwareCategories = hardwareCategoryOrder.map((name) => ({
  name,
  count: hardwareItems.filter((product) => product.category === name).length,
}))
