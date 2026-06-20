import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PoDynamicFormField, PoModalAction, PoModalComponent, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';


@Component({
  selector: 'app-nova-solicitacao',
  standalone: false,
  templateUrl: './nova-solicitacao.html',
  styleUrl: './nova-solicitacao.scss',
})
export class NovaSolicitacao implements OnInit{

  @ViewChild('modalAssinatura') modalAssinatura!: PoModalComponent;
  @ViewChild('signatureCanvas', { static: false }) signatureCanvas!: ElementRef;


  public assinaturaStatusTexto: string = 'Pendente de assinatura';
  private assinaturaBase64: string = ''; // Onde salvaremos a imagem final

  // Objeto para armazenar os dados da tela
  public solicitacao = {
    descricaoItem: '',
    unidade: '',
    contaContabil: ''
  };

  // Serviços Lookup (Substitua pelas suas URLs reais)
  public funcionarioService = 'URL_API_FUNCIONARIOS';
  public itemService = 'URL_API_ITENS_EPI';
  public depositoService = 'URL_API_DEPOSITOS';
  public ccService = 'URL_API_CENTROS_CUSTO';

  // Opções fixas (exemplo)
  readonly estabelecimentos: Array<PoSelectOption> = [
    { label: '101 - Matriz', value: '101' },
    { label: '102 - Filial SP', value: '102' }
  ];



  constructor(private poNotification: PoNotificationService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Inicializa o SignaturePad após a view carregar

  }

  // --- Lógica do Layout e Campos ---

  onItemChange(itemSelecionado: any) {
    if (itemSelecionado) {
      // Preenche os campos readonly automaticamente baseados no item
      this.solicitacao.descricaoItem = itemSelecionado.descricao;
      this.solicitacao.unidade = itemSelecionado.unidadeMedida;
      this.solicitacao.contaContabil = itemSelecionado.conta;
    } else {
      this.limparCamposAutomaticos();
    }
  }

  private limparCamposAutomaticos() {
    this.solicitacao.descricaoItem = '';
    this.solicitacao.unidade = '';
    this.solicitacao.contaContabil = '';
  }

  // --- Lógica da Assinatura Digital ---



  abrirModalAssinatura() {
    this.modalAssinatura.open();
    // Garante que o pad está limpo ao abrir

  }



  // --- Ações Finais ---

  confirmarSolicitacao() {
    if (!this.assinaturaBase64) {
      this.poNotification.error('A assinatura do solicitante é obrigatória.');
      return;
    }

    // Aqui você enviaria 'this.assinaturaBase64' junto com os outros dados para o backend
    this.poNotification.success('Solicitação salva! Baixa no estoque realizada.');
  }

  salvar(){
    
  }

  cancelar() {
    // Lógica de cancelamento
  }
}
