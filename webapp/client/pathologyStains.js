// List of gene names with stanford pathology stains
// TODO : Don't hardcode this, but use a geneSet and add a 
// user.profile variable to control which geneSets genes are annotated
// by for each user.

// Current list -- August 4 - olena's edits
// still not the final version
// removed N/A and blank entries
Template.geneWithInfo.onCreated(function(){
  let stainGenesString = `
SERPINA1
POMC
AFP
KATNB1
SAA1
ANXA1
AR
ARG1
BAP1
CCND1
BCL6
EPCAM
APP
CTNNB1
POU2AF1
T
BRAF
PIP
C3
C4B
CA9
CALCA
CALD1
CNN1
CALB2
CD1A
CD2
CD4
CD5
CD7
CD8A
MME
CD14
FUT4
MS4A1
CR2
FCER2
IL2RA
TNFRSF8
PECAM1
CD33
CD34
CD34
CD38
SPN
PTPRC
CLTA
UCHL1
NCAM1
B3GAT1
ITGB3
CD68
CD79A
CD99
KIT
KIT
IL3RA
SDC1
CD163
CDX2
CEACAM5
CEACAM5
CHGA
CTRC
KRT5
KRT6
KRT7
KRT19
KRT20
KRT8
MYC
CXCL13
CCND2
CCND3
PDPN
TINP1
HCLG1
HUSSY-29
HUSSY29
CDK105
HCL-G1
DES
ANO1
CDH1
EGFR
MUC1
MUC1
GPER1
ERG
VWF
F13A1
FOXP1
FSHB
LGALS3
GAST
GATA3
GFAP
GH1
GCG
SLC2A1
GLUL
GPC3
GYPC
GZMB
CGB5
ERBB2
GCSAM
PMEL
IDH1
CD79A
IGHD
FCGBP
FCMR
INHA
SMARCB1
INS
MKI67
CD207
LAT
LEF1
LHB
LMO2
LYZ
MAP2
SLC16A1
MLANA
MITF
MLH1
MNDA
EPCAM
MPO
MSH2
MSH6
MUC2
MUC4
MUC5AC
MUM1
MYOD1
MYOG
NAPSA
RBFOX3
CD63
NKX3-1
NMP1
NUTM1
POU2F2
POU5F1
OLIG2
OXT
CDKN2A
TP53
CDKNIC
TP63
PAX2
PAX5
PAX8
PDCD1
PRF1
PHLDA1
PIN4
LNPEP
PMS2
PGR
PRAP1
PRL
PROX1
KLK3
S100P
SALL4
SDHB
SF1
SMN1
MYH11
SST
SOX10
SOX11
STAT6
SYP
UMOD
TCL1A
TRB
TRG
TDT
TDT
TG
TIA1
ACP5
TTR
TSHB
NKX2-1
TYR
VIM
WT1
WT1
ZAP70
`;

let geneFamilyString=`
ACTA1
ACTA2
ACTB
ACT1
ACTG1
ACTG2
BCL2
BCL2L1
BCL2L2
MCL1
BAX
BCL2A1
BAK1
BOK
BCL2L10
BCL2L12
BCL2L13
BCL2L14
BCL2L15
BNIP2
CD3D
CD3E
CD4G
KRT1
KRT5
KRT10
KRT14
KRT1
KRT2
KRT3
KRT4
KRT5
KRT6
KRT7
KRT8
KRT10
KRT14
KRT16
KRT19
FCGR1A
FCGR1B
FCGR1CP
FCGR2A
FCGR2B
FCGR3A
FCGR3B
NEFH
NEFL
NEFM
ENO1
ENO2
ENO3
S100A1
S100A2
S100A3
`;

  // prepare the lists - remove blank entries
  // This would be replaced by fetching the appropriate GeneSets
  let stainGenes = _.filter(stainGenesString.split("\n"), function(x){return x !== ""});
  let geneFamily = _.filter(geneFamilyString.split("\n"), function(x){return x !== ""});

  // set up the available lists with icons and descriptions

  this.geneInfos = [
    {
      genes: stainGenes,
      description: "Stanford pathology stain available",
      color: "black",
    },
    {
      genes: geneFamily,
      description: "Stanford pathology stain available for this gene family",
      color: "grey",
    },
  ] 
});
