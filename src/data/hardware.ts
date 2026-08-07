import asusDesktopCpu from '../assets/images/hardware/asus-desktop-cpu.png'
import canonCanoScan9000fMarkIi from '../assets/images/hardware/canon-canoscan-9000f-mark-ii.png'
import canonDr6030c from '../assets/images/hardware/canon-dr-6030c.png'
import canonDr9050c from '../assets/images/hardware/canon-dr-9050c.png'
import canonDrG1100 from '../assets/images/hardware/canon-dr-g1100.png'
import canonDrG2090 from '../assets/images/hardware/canon-dr-g2090.png'
import canonDrX10c from '../assets/images/hardware/canon-dr-x10c.png'
import canonPixma from '../assets/images/hardware/canon-pixma.png'
import colortracSmartlfCi40 from '../assets/images/hardware/colortrac-smartlf-ci40.png'
import czurEt240 from '../assets/images/hardware/czur-et240.png'
import dellOptiplex9020 from '../assets/images/hardware/dell-optiplex-9020.png'
import dellOptiplex990 from '../assets/images/hardware/dell-optiplex-990.png'
import hpLaserjetP1102 from '../assets/images/hardware/hp-laserjet-p1102.png'
import hpProdesk600Pcimt from '../assets/images/hardware/hp-prodesk-600-pcimt.png'
import lenovoThinkpadT490 from '../assets/images/hardware/lenovo-thinkpad-t490.png'
import lenovoThinkvision from '../assets/images/hardware/lenovo-thinkvision.png'
import plustekOpticbook3600 from '../assets/images/hardware/plustek-opticbook-3600.png'
import plustekOpticbookA300 from '../assets/images/hardware/plustek-opticbook-a300.png'
import plustekOpticbookA300Plus from '../assets/images/hardware/plustek-opticbook-a300-plus.png'
import synologyDs1621Plus from '../assets/images/hardware/synology-ds1621-plus.png'
import synologyDs1813Plus from '../assets/images/hardware/synology-ds1813-plus.png'
import synologyNas from '../assets/images/hardware/synology-nas.png'
import tpLink8PortGigabitSwitch from '../assets/images/hardware/tp-link-8-port-gigabit-switch.png'
import trendnetTeg204ws from '../assets/images/hardware/trendnet-teg-204ws.png'
import trendnetTl2G244 from '../assets/images/hardware/trendnet-tl2-g244.png'

export const hardwareCategoryOrder = [
  'Book scanners',
  'Production document scanners',
  'Flatbed & photo scanners',
  'Large-format scanners',
  'Workstations & laptops',
  'Servers & storage',
  'Network equipment',
  'Printers & displays',
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

const productImages: Record<string, { src: string; alt: string }> = {
  'plustek-opticbook-a300-plus': { src: plustekOpticbookA300Plus, alt: 'Plustek OpticBook A300 Plus book scanner' },
  'plustek-opticbook-a300': { src: plustekOpticbookA300, alt: 'Plustek OpticBook A300 book scanner' },
  'plustek-opticbook-3600': { src: plustekOpticbook3600, alt: 'Plustek OpticBook 3600 book scanner' },
  'czur-et240': { src: czurEt240, alt: 'CZUR ET240 overhead book scanner' },
  'canon-dr-g2090': { src: canonDrG2090, alt: 'Canon DR-G2090 production document scanner' },
  'canon-dr-x10c': { src: canonDrX10c, alt: 'Canon imageFORMULA DR-X10C production document scanner' },
  'canon-dr-g1100': { src: canonDrG1100, alt: 'Canon imageFORMULA DR-G1100 production document scanner' },
  'canon-dr-9050c': { src: canonDr9050c, alt: 'Canon imageFORMULA DR-9050C production document scanner' },
  'canon-dr-6030c': { src: canonDr6030c, alt: 'Canon imageFORMULA DR-6030C document scanner' },
  'canon-canoscan-9000f-mark-ii': { src: canonCanoScan9000fMarkIi, alt: 'Canon CanoScan 9000F Mark II flatbed scanner' },
  'colortrac-smartlf-ci40': { src: colortracSmartlfCi40, alt: 'Colortrac SmartLF Ci 40 large-format scanner' },
  'hp-prodesk-600-pcimt': { src: hpProdesk600Pcimt, alt: 'HP ProDesk 600 PCIMT desktop workstation' },
  'dell-optiplex-9020': { src: dellOptiplex9020, alt: 'Dell OptiPlex 9020 desktop workstation' },
  'dell-optiplex-990': { src: dellOptiplex990, alt: 'Dell OptiPlex 990 desktop workstation' },
  'asus-cpu-unconfirmed': { src: asusDesktopCpu, alt: 'ASUS desktop CPU with model not recorded' },
  'lenovo-thinkpad-t490': { src: lenovoThinkpadT490, alt: 'Lenovo ThinkPad T490 business laptop' },
  'synology-ds1621-plus': { src: synologyDs1621Plus, alt: 'Synology DiskStation DS1621+ network-attached storage' },
  'synology-ds1813-plus': { src: synologyDs1813Plus, alt: 'Synology DiskStation DS1813+ network-attached storage' },
  'synology-nas-model-unconfirmed': { src: synologyNas, alt: 'Synology DiskStation NAS with model not recorded' },
  'tp-link-8-port-gigabit-switch': { src: tpLink8PortGigabitSwitch, alt: 'TP-Link eight-port gigabit desktop switch' },
  'trendnet-teg-204ws': { src: trendnetTeg204ws, alt: 'TRENDnet TEG-204WS 20-port gigabit web smart switch' },
  'trendnet-tl2-g244': { src: trendnetTl2G244, alt: 'TRENDnet TL2-G244 24-port gigabit managed Layer 2 switch' },
  'hp-laserjet-p1102': { src: hpLaserjetP1102, alt: 'HP LaserJet P1102 desktop printer' },
  'canon-pixma-model-unconfirmed': { src: canonPixma, alt: 'Canon PIXMA printer with model not recorded' },
  'lenovo-thinkvision-model-unconfirmed': { src: lenovoThinkvision, alt: 'Lenovo ThinkVision display with model not recorded' },
}

function item(input: Omit<HardwareItem, 'image' | 'imageAlt'>): HardwareItem {
  const visual = productImages[input.id]
  if (!visual) throw new Error(`Missing product visual for ${input.id}`)
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
]

export const hardwareCategories = hardwareCategoryOrder.map((name) => ({
  name,
  count: hardwareItems.filter((product) => product.category === name).length,
}))
